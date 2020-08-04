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
    const students = getTagsOfType('targetStudents');

    return `${pick(topics)} for ${pick(students)}`;
};

const adjectiveAndTopic = () => {
    const topics = microTags
        .filter(t => t.bucket === 'topic')
        .map(t => t.value);
    const adjectives = microTags
        .filter(t => ['verbalTone', 'visualTone'].includes(t.bucket))
        .map(t => t.value);

    return `${pick(adjectives)} ${pick(topics)}`;
};

const feelingEvokedMediumInLocation = () => {
    const feelings = getTagsOfType('feelingEvoked');
    const media = getTagsOfType('medium');
    const locations = getTagsOfType('location');

    return `${pick(feelings)} ${pick(media)} in ${pick(locations)}`;
};

const verbalToneMediumClassStyle = () => {
    const tones = getTagsOfType('verbalTone');
    const media = getTagsOfType('medium');
    const styles = getTagsOfType('classStyle');

    return `${pick(tones)} ${pick(media)} ${pick(styles)}`;
};

const notImplemented = () => {
    return 'not implemented yet';
};

// Other generators?
// [verbal tone] [activity] in [location]

const generators = [
    topicForStudent,
    adjectiveAndTopic,
    feelingEvokedMediumInLocation,
    verbalToneMediumClassStyle,
];

export const generate = () => {
    const generator = generators[Math.floor(Math.random() * generators.length)];
    return generator();
};
