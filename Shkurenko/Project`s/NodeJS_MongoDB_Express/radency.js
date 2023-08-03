
const s = 'w27y7';
const p1 = '27';
const p2 = 'w7y';
const stringChecker = function(s, p1, p2) {
    if (s.length == p1.length + p2.length) {
            s = s.split('');
            p1 = p1.split('');
            p2 = p2.split('');

            for( let i = 0; i < s.length; i++ ){
                if( s[0] == p1[0] && s[0] == p2[0]){
                    s.shift();
                    p1.shift();
                    p2.shift();
                    s = s.join('');
                    p1 = p1.join('');
                    p2 = p2.join('');
                    return stringChecker(s, p1, p2);
                }
                if( s[0] == p1[0]){
                    s.shift(); 
                    p1.shift();
                } else if(s[0] == p2[0] ){
                    s.shift();
                    p2.shift();
                } else return false;
            }

            return true;
        }
        return false;
    }
console.log(stringChecker(s, p1, p2));
// const s = 'w27y7';
// const p1 = '27';
// const p2 = 'w7y';
// const stringChecker = function(s, p1, p2) {
//     if (s.length == p1.length + p2.length) {
//             s = s.split('');
//             p1 = p1.split('');
//             p2 = p2.split('');
//             let p1New = [];
//             //let flag = false; 
//             //let p2New  = [];
//             for( let i = 0; i < s.length; i++ ){
//                     if( s[i] == p1[0]){
//                         p1New[i] = s[i];
//                         //p2New[i] = ' ';
                        
//                         p1.shift();
//                     }
//                     if(s[i] == p2[0] ){
//                         p1New[i] = s[i];
//                         //p1New[i] = ' ';
//                         p2.shift();
//                     }
//                     if( s[s.length - i] == p1[p1.length -1]){
//                         p1New[s.length - i] = s[s.length - i];
//                         //p2New[s.length - i] = ' ';
                        
//                         p1.pop();
//                     }
//                     if(s[s.length - i] == p2[p2.length -1]){
//                         p1New[s.length - i] = s[s.length - i];
//                         //p1New[s.length - i] = ' ';
//                         p2.pop();
//                     }


//                 //else {
//                 //     console.log(p1New);
//                 //     console.log(p2New);
//                 //     return false;
//                 // }
//             }
//             if(p1New.join() == s.join()) return true;
//             //return true;
//         }
//         return false;
//     }
// console.log(stringChecker(s, p1, p2));