import { microTags } from './microtags';


const pick = (choices: string[]) => {
    return choices[Math.floor(Math.random() * choices.length)];
}

export const generate = () => {
    const topics = microTags.filter((t) => t.bucket === 'topic').map(t => t.value);
    const students = microTags.filter((t) => t.bucket === 'targetStudent').map(t => t.value);

    return `${pick(topics)} for ${pick(students)}}`;
};
