import { prompt } from "enquirer";
import path from "path";
import fs from "fs-extra";
import questions from "./questions.json";
import { initStarter } from "./init-starter";

interface IAnswers {
    project: string;
}

export async function run() {
    console.log(`Welcome! Let's ask some questions`);
    const data = await prompt<IAnswers>(questions);

    console.log(data);

    await initStarter(
        "https://github.com/gatsbyjs/gatsby-starter-hello-world.git",
        data.project
    );
}
