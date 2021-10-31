import React from "react";
import { useContext } from "react";
import { Avatar, List } from "antd";
import { useRouter } from "next/router";
import { UserContext } from "../../context";
import { imageSource } from "../../functions";
import { Card } from "antd";
import Link from "next/link";
const People = ({ people, handleFollow, handleUnfollow }) => {
  const [state] = useContext(UserContext);
  const router = useRouter();
  return (
    <Card hoverable title="People may you know" className=' my-4'>
      {/* <pre>{JSON.stringify(people,null,4)}</pre> */}
      <List
        itemLayout="horizontal"
        dataSource={people}
        renderItem={(user) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={imageSource(user)} />}
              title={
                <div className="d-flex justify-content-between">
                  <Link href={`/user/${user.username}`}>
                    <a>{user.username}</a>
                  </Link>
                  {state &&
                  state.user &&
                  user.followers &&
                  user.followers.includes(state.user._id) ? (
                    <a
                      onClick={() => handleUnfollow(user)}
                      className="btn btn-sm btn-primary"
                    >
                      Unfollow
                    </a>
                  ) : (
                    <a
                      onClick={() => handleFollow(user)}
                      className="btn btn-sm btn-primary"
                    >
                      Follow
                    </a>
                  )}
                </div>
              }
            />
          </List.Item>
        )}
      />
    </Card>
  );
};

export default People;
