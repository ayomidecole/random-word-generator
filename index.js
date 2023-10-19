const sentence = {
    subjects: ['A chicken', 'A pineapple'],
    verbs: ['kicked', 'ate'],
    objects: ['the door', 'a ps5 controller'],
    extras: ['so hard it exlpoded', 'now it shits gold'],
    moreSubjects:['humans', 'worlds', 'dicks'],
    moreObjects: ['laughed', 'collided', 'flapped']
};

const generateJoke = () => {
    const subject = sentence.subjects[Math.floor(Math.random() * sentence.subjects.length)];
    const verb = sentence.verbs[Math.floor(Math.random() * sentence.verbs.length)];
    const object = sentence.objects[Math.floor(Math.random() * sentence.objects.length)];
    const extra = sentence.extras[Math.floor(Math.random() * sentence.extras.length)]
    const moreSubject = sentence.moreSubjects[Math.floor(Math.random() * sentence.moreSubjects.length)];
    const moreObject = sentence.moreObjects[Math.floor(Math.random() * sentence.moreObjects.length)]

    return `${subject} ${verb} ${object} ${extra}, ${moreSubject} ${moreObject}`
};

const joke = generateJoke();

console.log(joke);
