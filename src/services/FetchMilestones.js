import { string } from "../globals";
import dummyResponse from "../dummyResponse.json";

export const fetchMilestones = async (milestoneApi) => {
  const baseUrl = "http://staging.kinedu.com/api/v3/skills/";
  const token = // To Do: Save the token into a .env file
    "Token token=5105f4358e45f6f98057a654c882b7742c3ac5241c81a706acc48c84f8acde9f8a344993ac42369627ae9f2caf1eed42ff1be9562fe2167c9c80908e76e95c49";

  const milestone = () => {
    switch (milestoneApi) {
      case string.tabs.physical.value:
        return "2/milestones";
      case string.tabs.social.value:
        return "23/milestones";
      default:
        return "";
    }
  };

  const getMilestones = await fetch(`${baseUrl}${milestone()}`, {
    method: "GET",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
  });
  const { data } = await getMilestones.json();
  // const { data } =   dummyResponse;

  return data;
};
