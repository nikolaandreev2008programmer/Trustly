# Trustly - накарай ги да повярват
**можете да намерите уебсайта на адрес: *[https://trustly.herokuapp.com/](https://trustly.herokuapp.com/)***  
**за да прегледате презентацията кликнете *[ТУК](https://docs.google.com/presentation/d/1pzplFCSr2pq3jP1eMlXg7AhKzN_yTjWgsdfdtC7SG8Q/edit?usp=sharing)***  
**Trustly** е платформа, наподобяваща социална мрежа, в която потрбителите могат да споделят за предизвикателства които изпълняват и да качват информацията в реално време под формата на стъпка в изпълнението. Това дава възможност на други заинтересовани от същиата или подобна цел да разберат дали изпълнението ѝ си заслужава. По запознатите по дадена тема могат да дават съвети на предизвикалия се под формата на коментари, което може да предпази здравето на предизвикалия се. Ако и друг потребител е съгласен с някой коментар или просто го харесва може да го изрази кликайки върху сърчицето до коментара. Може да се реагира на предизвикателствата с *харесване* или *FAIL*, като и двете реакции добавят предизвикателството към категорията **следвани**, но те както и коментарите са активни само ако потребителя е влязъл в акаунт. Коментарите и реакциите осигуряват връзка между читателите и предизвикалия се и дават възможност на читателите да споделят мнението си. За да качиш предизвикателство, трябва акаунта ти да бъде с потвърден e-mail арес. Качените предизвикателства могат да бъдат обработвани или изтрити. В началната страница предизвикателствата се подреждат спрямо харесванията им, последното обновяване на информацията и статуса им. Страницата разполага и с търсачка, която дава възможност да се намери определен профил или чалиндж, както и човек да потърси „чалинджи“ от които е заинтересован(пример: въвежда *ски* и му се показват всички предизвикателства съдържащи *ски*). Потребителя може да редактира профила си или да качи профилна снимка.  
**Уебсайта е напълно RESPONSIVE!**
### Използвани технологии и реализация
* FRONTEND е изграден изцяло на Angular
   * За четене на описанието на предизвикателствата, които съдържат **MarkDown** използвам **ngx-markdown**
   * За стилизация използвам **SCSS**
   * Използвам иконки от **FontAwsome** изтеглени като SVG
   * Рекуестите към бакенда биват обработвани през **interceptor**
* BACKEND - *NodeJS*
   * За приемане на заявките към сървара използвам **EXPRESS**
   * Файловете (снимки и видеа) биват качени в **Cloudinary**, като биват компресирани, за да заемат по-малко място
   * За улеснение при качването на файловете използвах **Multer** и **Cloudinary NodeJS SDK**
   * E-MAIL бива изпращан през **SendGrid**
   * За датабаза използвах **MongoDB** и защото уебапликацията е хостната в Heroku използвам **MongoDB Atlas** в deploy-ната в Heroku версия  
  
### Верифициран акаунт:
Потребителско име: **Никола Андреев**  
Парола: **nikola_2008**
