let pattern1 = "pw";
let regExOne = /ew/gi;
let WordSrting =
  "mission is to permeate through every student/professional's pw skills outlook towards jobs and change their attitude and perspective from How Can I Do It?  pw skills to Of Course I Can Do It. We aim to do this pw skill by providing exceptional up skilling courses at affordable rates, while being tech-forward so anyone, anywhere pw skills can access and improve their ability to be successful in life.";

let resultForCheck = regExOne.test(WordSrting);
console.log(resultForCheck);

let UsingMehtodCheck = WordSrting.match(pattern);
console.log(UsingMehtodCheck);

// RegEx method ==> There have some method
//  variable.test(give paragraph)
// Ex ;

const FirstParagraph =
  "Learn complete web stack programming with React and Node by doing it the way a full-stack Learn professional would do it. Learn how to create whole web apps Learn from start to finish learn with one of the most trending tech stacks available.";

const WhichPatterMatch = /Learn/gi;

let ParaMatchResult = WhichPatterMatch.test(FirstParagraph);
// console.log(ParaMatchResult);

// Agar show karna hai ki kitan pattern milla hai to RegEx me

// variable.match(paragrah name );
const MatchMethod = FirstParagraph.match(WhichPatterMatch);
console.log(MatchMethod);

// Another Method

let pattern = /web/gi;
console.log(FirstParagraph.match(pattern));

// Using the variable.replace(pattern, jo new rakhna hai ) ==> .replace(pattern, 'pw')
console.log(FirstParagraph);

let OneMoreResult = FirstParagraph.replace(pattern, "pw-skills");
console.log(OneMoreResult);
