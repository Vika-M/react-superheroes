import React from 'react'

import './App.css';
import Heroes from './components/heroes';


const heroes = [
  {
  name: "Супермен",
  universe: "DC Comics",
  alterego: "Кларк Кент",
  activity: "борец за справедливость",
  friends: "собака Крипто",
  superpowers: "непробиваемость, суперсила, полет, самоисцеление, суперзрение и суперслух, классный костюм",
  image:  "https://n1s1.hsmedia.ru/06/d3/73/06d37321618034ec5f2a65b09c8576e3/547x397_0xac120002_45567661540468871.jpg"
},
{
  name:  "Железный человек",
  universe:  "Marvel Comics",
  alterego:  "Тони Старк",
  activity:  "гений, миллиардер, плейбой, филантроп",
  friends:  "Мстители",
  superpowers:  "высокий уровень интеллекта, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы",
  image:  "https://n1s1.hsmedia.ru/7b/56/08/7b5608ec3df83d872fa1162fb9e32f28/547x397_0xac120002_1773711401540468871.jpg"
},
, {
  "name": "Человек-паук",
  "universe": "Marvel Comics",
  "alterego": "Питер Паркер",
  "activity": "борец за справедливость, студент, фотограф",
  "friends": "Мстители, Фантастическая четверка, Люди Икс",
  "superpowers": "сверхчеловеческие рефлексы, «паучье чутье», способность прилепляться к твердым поверхностям, производство паутины",
  "image":  " https://n1s1.hsmedia.ru/37/39/74/373974effcc7ccd093d849e8fa062091/547x397_0xac120002_9548247751540468871.jpg"
}, {
  "name": "Капитан Америка",
  "universe": "Marvel Comics",
  "alterego": "Стивен Роджерс",
  "activity": "супер-солдат",
  "friends": "Мстители",
  "superpowers": "сила, выносливость, бессмертие, быстрая регенерация, мастерство скрытности и боя",
  "image":  " https://n1s1.hsmedia.ru/41/8f/05/418f050c767eeca8854b328914c7bccc/547x397_0xac120002_20106541761540468871.jpg"
}, {
  "name":  "Тор",
  "universe":  "Marvel Comics",
  "alterego":  "полное имя — Тор Одинсон",
  "activity":  "борец за справедливость, скандинавский бог",
  "friends":  "Мстители",
  "superpowers":  "все, что может бог, плюс молот Мьелнир",
  "image":  "https://n1s1.hsmedia.ru/52/a3/e1/52a3e14a0c8f02715b763e7a20fe1c00/547x397_0xac120002_19311926741540468872.jpg"
}, {
  "name":  "Халк",
  "universe":  "Marvel Comics",
  "alterego":  "Брюс Беннер",
  "activity":  "супергерой, борец за справедливость, ученый-биохимик",
  "friends":  " Мстители",
  "superpowers":  "сверхчеловеческая сила искорость, выносливость, полет",
  "image":  " https://n1s1.hsmedia.ru/9a/28/e7/9a28e7b059594fc10387669ae4bd2f22/547x397_0xac120002_20162335021540468872.jpg"
}, {
  "name": "Чудо-женщина",
  "universe": "DC Comics",
  "alterego": "Диана Принс",
  "activity": "супергероиня, секретарь-референт",
  "friends": "Лига Справедливости, Бэтмен, Супермен",
  "superpowers": "сверхчеловеческая сила и скорость, выносливость, полет",
  "image":  " https://n1s1.hsmedia.ru/87/ed/c5/87edc525d8813c7b2899e04a4e562fe9/547x397_0xac120002_6444132261540468872.jpg"
}, {
  "name":  "Дэдпул",
  "universe": "Marvel Comics",
  "alterego": "Уэйд Уинстон Уилсон",
  "activity": "антигерой, наемник",
  "friends": "частично Мстители, Человек-паук, Росомаха",
  "superpowers": "высокий болевой порог, регенерация и бессмертие, сверхчеловеческая иммунная система",
  "image":  " https://n1s1.hsmedia.ru/34/93/39/3493392c94fc2ae0552ef9c7e87f2617/728x382_1_cc2a743fd686b7b2e256c062966bb465@1034x543_0xac120002_2692921231540468872.jpg"
}

];

function App() {
  return (
    <div  className="app">
     {
       heroes.map( (hero) =>
      <Heroes name={hero.name} universe={hero.universe} alterego={hero.alterego} activity={hero.activity} friends={hero.friends} superpowers={hero.superpowers} image={hero.image}  ></Heroes>

       )
     }
    </div>


  );
}

export default App;
