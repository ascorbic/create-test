import { prompt } from "enquirer";
import questions from "./questions.json";
async function run() {
    console.log(`Welcome! Let's ask some questions`);
    const data = await prompt(questions);
    console.log(data);
}

run().then(() => console.log("done"));
