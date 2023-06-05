const { Client } = require("@notionhq/client");
import { v4 as uuidv4 } from "uuid";

const notion = new Client({
  auth: process.env.NOTION_API_TOKEN,
});

export default async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ msg: "Only POST requests are allowed" });
  }
  try {
    const { name, email, subject, message } = JSON.parse(req.body);
    console.log(email);
    await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID,
      },
      properties: {
        Id: {
          title: [
            {
              text: {
                content: uuidv4(),
              },
            },
          ],
        },

        Name: {
          rich_text: [
            {
              text: {
                content: name,
              },
            },
          ],
        },

        Email: {
          rich_text: [
            {
              text: {
                content: email,
              },
            },
          ],
        },
        Subject: {
          rich_text: [
            {
              text: {
                content: subject,
              },
            },
          ],
        },
        Message: {
          rich_text: [
            {
              text: {
                content: message,
              },
            },
          ],
        },
      },
    });
    res.status(201).json({ msg: "Success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Failed" });
  }
};
