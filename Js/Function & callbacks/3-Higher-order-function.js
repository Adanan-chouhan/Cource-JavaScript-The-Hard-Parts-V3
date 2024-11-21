// jab koi function kisi dusray function ko as a argument lata hay or us ko as a result return kerta 	

const Question = (name) => {
    if (name === "Adnan") {
        return function (topic) {
            console.log(`Hello ${name}. What is ${topic}. Please Explain us.`);
        };
    };
    if (name === "kyle") {
        return function (topic) {
            console.log(`Hello ${name}. What is ${topic}. Please Explain us.`)
        };
    };
};

const user1 = Question("Adnan");
user1("AI");
user1("Computer Networking");
user1("Operating System");

const user2 = Question("kyle");
user2("software engineer");
user2("Full stack Developer");
user2("Front End Developer"); 


