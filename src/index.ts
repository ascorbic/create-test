import { prompt } from "enquirer";
import questions from "./questions.json";
export async function run() {
    console.log(`Welcome! Let's ask some questions`);
    const data = await prompt(questions);
    console.log(data);
}
