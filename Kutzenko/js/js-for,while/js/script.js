let num = 1;
while(num <= 5){
    console.log(num);
    num++;
}

num = 1;
do{
    console.log(num);
    num++;
}while(num<=5);

for(num=1;num<=5;num++){
    console.log(num);
}
console.log("--------------------------");
num=8;
while(num){
    console.log(num);
    num--;
}
console.log("--------------------------");
num=0;
while(num<3){
    console.log(`Число: ${num}`);
    num++;
}
for(num=0;num<3;num++){
    console.log(`Число: ${num}`);
}
console.log("--------------------------");
Firstfor: for(num=0;num<2;num++){
    for(let size=0;size<3;size++){
        console.log(size);
        if(size==1){
            break Firstfor;
        }
    }
}