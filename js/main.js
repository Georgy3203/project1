let money,time;

function start(){
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    
    while(isNaN(money) || money == "" || money ==null){
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}
start();


console.log(money);
console.log(time);

let AppData = {
    budget:money,
    timeData:time,
    expenses:{},
    optionalExpenses:{},
    income: [],
    saving:true
};



    function chooseExpenses(){
        for( let i = 0;i <2 ;i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                b = prompt("Во сколько обойдется?", '');
                
                if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null &&
                     a != '' && b != '' && a.length < 50){
                    console.log("done");
                    AppData.expenses[a] = b;
                }else {
                    i=i-1;    
                }
                
        }
    }
chooseExpenses();
   
function detectDayBudget(){
    AppData.moneyPerDay = (AppData.budget / 30).toFixed();

    alert('Ежедневный бюджет: ' + AppData.moneyPerDay);

    if (AppData.moneyPerDay < 100){
        console.log('Минимальный уровень достатка');
    }else if (AppData.moneyPerDay > 100 && AppData.moneyPerDay < 2000 ){
        console.log('Средний уровень достатка');
    }else if (AppData.moneyPerDay > 2000){
        console.log('Высокий уровень достатка');
    }else{
        console.log('Произошла ошибка');
    }
}



function checkSavings(){
    if (AppData.saving == true){
        let save = +prompt('Какова сумма накоплений?'),
            procent = +prompt('Под какой процент?');

        AppData.monthIncome = save/100/12*procent;
        alert('Доход в месяц в вашем депозите равна: ' + AppData.monthIncome);
    }
}
checkSavings();

