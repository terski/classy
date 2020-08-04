import { microTags } from './microtags';

const pick = (choices: string[]) => {
    return choices[Math.floor(Math.random() * choices.length)];
};

const getTagsOfType = (bucket: string) => {
    return microTags.filter(t => t.bucket === bucket).map(t => t.value);
};

// Create a set of generator functions. Each function is a syntax for a
// microgenre. Randomly pick a generator and invoke it.

// Generators
const topicForStudent = () => {
    const topics = getTagsOfType('topic');
    const students = getTagsOfType('targetStudent');

    return `${pick(topics)} for ${pick(students)}`;
};

const adjectiveAndTopic = () => {
    const topics = getTagsOfType('topic');
    const adjectives = microTags
        .filter(t => ['verbalTone', 'visualTone'].includes(t.bucket))
        .map(t => t.value);

    return `${pick(adjectives)} ${pick(topics)}`;
};

const feelingEvokedLocationMedium = () => {
    const feelings = getTagsOfType('feelingEvoked');
    const locations = getTagsOfType('location');
    const media = getTagsOfType('medium');

    return `${pick(feelings)} ${pick(locations)} ${pick(media)}`;
};

const verbalToneMediumClassStyle = () => {
    const tones = getTagsOfType('verbalTone');
    const media = getTagsOfType('medium');
    const styles = getTagsOfType('classStyle');

    return `${pick(tones)} ${pick(media)} ${pick(styles)}`;
};

const classesByBackgroundMediumExperts = () => {
    const backgrounds = getTagsOfType('teacherBackground');
    const media = getTagsOfType('medium');

    return `${pick(backgrounds)} Experts in ${pick(media)}`;
};

const visualToneVerbalToneTopic = () => {
    const visuals = getTagsOfType('visualTone');
    const feelings = getTagsOfType('feelingEvoked');
    const topics = getTagsOfType('topic');

    return `${pick(visuals)}, ${pick(feelings)} ${pick(topics)}`;
};

// Other generators?
// [verbal tone] [activity] in [location]

const generators = [
    topicForStudent,
    adjectiveAndTopic,
    feelingEvokedLocationMedium,
    verbalToneMediumClassStyle,
    classesByBackgroundMediumExperts,
    visualToneVerbalToneTopic,
];

export const generate = () => {
    const generator = generators[Math.floor(Math.random() * generators.length)];
    return generator();
};
