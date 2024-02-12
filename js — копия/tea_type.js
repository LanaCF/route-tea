const teaType = [
    { 
        id: 1, 
        dataId: 'black-tea',
        img: 'img/black-tea.png',
        type: 'Чорний чай', 
        text: 'Чорний чай - це один з найпопулярніших видів чаю, який виробляється з листя чайного куща Camellia sinensis. Він має насичений смак і аромат, а також багатий колір, що його відрізняє від інших видів чаю. <br><br> Чорний чай виробляється за допомогою процесу окислення, коли свіже листя чайного куща піддається дії повітря. Цей процес надає чаю темний колір і насичений смак. Чим довше триває окислення, тим сильнішим буде смак чаю. <br><br> Чорний чай може мати різні смакові відтінки, від фруктових і квіткових ноток до димних і деревних ароматів. Він також може бути ароматизований різними добавками, такими як фруктові або квіткові есенції, що робить його ще більш різноманітним у смаку. <br><br> Чорний чай має численні корисні властивості, включаючи підтримку серцевого здоров"я, зниження рівня холестерину, покращення травлення і зняття стресу. Він також містить антиоксиданти, які допомагають захищати організм від шкідливого впливу вільних радикалів. <br><br> Загалом, чорний чай - це вишуканий і смачний напій, який може бути насолоджуватися як самостійно, так і в поєднанні з молоком або цукром. Він є невід"ємною частиною багатьох культурних традицій і залишається популярним по всьому світу.' 
    },

    { 
        id: 2, 
        dataId: 'green-tea',
        img: 'img/green-tea.png',
        type: 'Зелений чай', 
        text: 'Зелений чай - також один із найпопулярніших і найбільш корисних видів чаю, який виробляється з листя чайного куща Camellia sinensis, але відрізняється від чорного чаю тим, що проходить менше окислення. В результаті зелений чай має світлий зелений або жовто-зелений колір і більш свіжий, трав"яний смак. <br><br> Зелений чай багатий антиоксидантами, такими як катехіни і епігалокатехіни, які мають численні корисні властивості для здоров"я. Він допомагає знижувати ризик розвитку серцево-судинних захворювань, покращує функцію мозку і пам"ять, знижує ризик розвитку діабету типу 2 і підтримує здоров"я шкіри. <br><br> Зелений чай також відомий своїми стимулюючими властивостями, які допомагають підвищити енергію і покращити настрій. Він містить катехіни, які сприяють збереженню ваги, сприяють швидшому спалюванню жиру і покращенню обміну речовин. <br><br> Зелений чай може мати різноманітні смакові відтінки, від свіжого і трав"яного до квіткових і фруктових ароматів. Його можна насолоджувати як гарячим, так і охолодженим, з додаванням лимону, м"яти або меду для підвищення смаку. <br><br> В цілому, зелений чай - це чудовий напій, який не лише смачний, але й корисний для здоров"я. Він є популярним по всьому світу і займає важливе місце в багатьох культурах і традиціях.' 
    },

    { 
        id: 3, 
        dataId: 'yellow-tea',
        img: 'img/yellow-tea.jpg',
        type: 'Жовтий чай', 
        text: 'Жовтий чай - це рідкісний і вишуканий напій, який виготовляється з молодих листків і пагонів чайного куща Camellia sinensis. Він має світло-жовтий колір і ніжний, м"який смак зі слабко вираженою гірчинкою. Жовтий чай володіє витонченим ароматом і неповторним смаком, які роблять його популярним серед шанувальників чаю. <br><br> Виробництво жовтого чаю включає додаткові кроки обробки, що відрізняє його від інших видів чаю. Процес включає парування, обгортання і окислення, що призводить до утворення характерного жовтого кольору та ніжного смаку. Цей унікальний процес додає чаю особливу м"якість і неповторний смак. <br><br> Жовтий чай також відомий своїми корисними властивостями, серед яких антиоксидантна дія, зменшення ризику серцево-судинних захворювань та поліпшення шкіри. Він також може допомогти зняти стрес і підвищити настрій. <br><br> Завдяки своєму вишуканому смаку та корисним властивостям, жовтий чай стає відмінним вибором для тих, хто цінує якість і елегантність у чаї.' 
    },

    { 
        id: 4, 
        dataId: 'white_tea',
        img: 'img/white_tea.webp',
        type: 'Білий чай', 
        text: 'Білий чай - це один з найбільш ніжних і вишуканих видів чаю, вирощуваний з молодих пагонів і незрілих листків чайного куща Camellia sinensis. Він отримав свою назву за білосніжний ворсистий покрив листя, який зберігається під час обробки. Білий чай відзначається ніжним квітковим ароматом і слабкою гірчинкою, що робить його ідеальним для тих, хто шукає легкий і ніжний смак. <br><br> Виробництво білого чаю включає мінімальну обробку, що дозволяє зберегти природний смак і аромат свіжого листя. Чайні листки збираються вручну і піддаються лише легкій обробці, такій як вивільнення від вологи й сонячна сушка. Цей процес дозволяє зберегти найбільш природний смак і аромат куща чаю. <br><br> Білий чай відомий своїми корисними властивостями, включаючи антиоксидантні властивості, поліпшення здоров"я шкіри і зниження ризику серцево-судинних захворювань. Він також має помірний вміст кофеїну, що робить його відмінним вибором для тих, хто шукає натуральну енергію без надмірного збудження. <br><br> Завдяки своєму ніжному смаку, вишуканому аромату і корисним властивостям, білий чай є відмінним вибором для насолоди моментом спокою і відпочинку.' 
    },

    { 
        id: 5, 
        dataId: 'ulun-tea',
        img: 'img/ulun-tea.jpg',
        type: 'Улун', 
        text: 'Улун (або уолун) - це напій, який походить з Китаю і є проміжним між чорним і зеленим чаєм, як за смаком, так і за обробкою. Цей вид чаю часто описують як напій з багатогранним характером, що поєднує в собі якості і аромат зеленого та чорного чаю. <br><br> Улун виробляється з листя чайного куща Camellia sinensis, яке піддається неповній ферментації, що робить його менш оксидованим, ніж чорний чай, але більш, ніж зелений чай. Цей процес обробки надає улуну характерні витончений смак і аромат, а також дозволяє зберегти корисні властивості чайного листя. <br><br> Смак улуну може варіюватися від світлого і квіткового до темного і насиченого, залежно від ступеня ферментації і витримки. Цей напій може мати нотки квітів, фруктів, трав і навіть меду. Він також відомий своєю приємною гірчинкою і охолоджуючим ефектом. <br><br> Улун відзначається не лише своїм унікальним смаком і ароматом, але й корисними властивостями. Він містить антиоксиданти, вітаміни та мінерали, які сприяють загальному здоров"ю та зміцненню імунної системи. Крім того, улун містить природну кількість кофеїну, що робить його відмінним варіантом для тих, хто шукає натуральний стимулюючий напій.' 
    },

    { 
        id: 6, 
        dataId: 'puer_tea',
        img: 'img/puer_tea.jpeg',
        type: 'Пуер', 
        text: 'Пуер (або пуерх) - це вид чорного чаю, який походить з провінції Юньнань у Китаї. Цей чай відомий своїм унікальним смаком, ароматом та корисними властивостями, які відрізняють його від інших чорних чаїв. <br><br> Пуер виробляється з листя чайного куща Camellia sinensis, яке піддається спеціальному процесу ферментації та витримки. Цей процес надає пуеру особливий смак і аромат, які можуть варіюватися від земляних та деревних ноток до солодкуватих і фруктових відтінків. <br><br> Існують два типи пуеру: сирі (свіжі) і підготовлені для споживання (зрілі). Сирі пуери піддаються додатковій витримці під впливом вологи та бактерій, що дозволяє їм розвивати багатогранний смак і аромат з часом. Зрілі пуери, з іншого боку, піддаються швидкій ферментації, яка забезпечує більш м"який і менш гострий смак. <br><br> Пуер відомий своїми корисними властивостями, такими як сприяння шлунково-кишковому здоров"ю, зниження рівня холестерину, покращення травлення і підвищення енергії. Він також відомий своїм здатністю сприяти схудненню та підтримувати імунну систему. <br><br> Загалом, пуер - це чай з багатою історією, унікальним смаком і ароматом, а також численними корисними властивостями, які роблять його популярним в усьому світі.' 
    },

    { 
        id: 7, 
        dataId: 'fito_tea',
        img: 'img/fito_tea.webp',
        type: 'Фіточай', 
        text: 'Фіточай - це різновид чаю, який виготовляється з різних рослинних матеріалів, таких як листя, квіти, коріння, трави та інші частини рослин. Він відрізняється від традиційного чаю, який виготовляється з листя чайного куща, і може мати різноманітні смаки, аромати і корисні властивості в залежності від складу і типу рослин. <br><br> Фіточай часто має різні цільові властивості, такі як покращення здоров"я, підвищення енергії, зняття стресу або покращення шкіри. Він може бути виготовлений з різних рослин, таких як лаванда, м"ята, лимонник, ромашка, шипшинник, імбир, алое вера та інші, кожен з яких має свої унікальні властивості і користь для організму. <br><br> Основні переваги фіточаю включають його природний походження, відсутність штучних добавок та консервантів, а також багатий склад корисних рослинних речовин, які можуть підтримувати здоров"я і допомагати в боротьбі з різними проблемами. <br><br> Фіточай може бути приготований як гарячим, так і холодним, з додаванням різних солодких або кислих інгредієнтів для підвищення смаку. Він є популярним напоєм для здорового способу життя і може бути корисним доповненням до раціону харчування.' 
    }
];
