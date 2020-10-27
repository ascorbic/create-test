import { prompt } from "enquirer";
import path from "path";
import fs from "fs-extra";
import questions from "./questions.json";
import { initStarter } from "./init-starter";

interface IAnswers {
    project: string;
}

export async function run() {
    console.log(`Welcome to Gatsby! Let's answer some questions`);
    const data = await prompt<IAnswers>(questions);

    await initStarter(
        "https://github.com/gatsbyjs/gatsby-starter-hello-world.git",
        data.project
    );
    console.log(
        "Looks like you should probably go and implement `gatsby plugin add` then!"
    );
}
