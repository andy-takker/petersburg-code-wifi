import "@vkontakte/vkui/dist/vkui.css";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import TheRoot from "./components/TheRoot";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          title: "Wi-Fi Point | SPB",
          welcome:
            "Free access internet for tourists and citizens of Saint Petersburg",
          share: "Share your location  to find Wi-Fi hotspots nearby",
          tips: "Useful tips",
          share_loc: "Share location",
          go_map: "Go to map",
          main_tab: "Home",
          map_tab: "Map",
          coordinates: "Your latitude & longitude:",
          nearest: "Nearest open wi-fi hotspot in:",
          article: "Article",
          security: "Protect yourself when connecting to open wi-fi networks",
          fast: "Why city Wi-Fi networks are convenient and safe",
          metro: "Wi-Fi in the St. Petersburg metro",
          smart: "“Smart City” project",
          source: "Source:",
          article_1: `<p class="text-lg font-bold">How to protect yourself when connecting to public networks </p>
          Free public wi-fi is often helpful when you have poor mobile Internet coverage or need to access the Internet from a laptop. But you should use it with caution: many public networks are not protected in any way. I will tell you why public wi-fi networks are vulnerable to hackers and how you can protect your data. <br> When you connect to a public wifi network, you agree to share your data with the network owner. You cannot use it anonymously-you must verify your identity to connect. When registering on the network, you must provide either passport data, or a public services account, or a phone number. The latter is the most commonly used.
          <br> Fraudsters sometimes create fake access points that mimic proven ones. To do this, they change the name of their network and copy the Internet connection page. This method of hacking is called an "evil twin" attack: a fake access point is almost impossible to distinguish from a real one. Therefore it is worth connecting to points to which there is a certain confidence - for example, urban wi-fi networks of St. Petersburg.
          <br> <p class="font-bold">What you should and should not do when connecting to public wi-fi</p>
          <ul class="list-disc pl-4"><li>Don't enter payment information on websites and don't use banking apps with wi-fi connected.</li>
          <li>Use only sites with an HTTPS digital security certificate.</li>
          <li> Turn off automatic connection to wifi hotspots. </li><li>Use a special program. </li>
          <li>Easy-to-use applications that encrypt traffic and change your IP address can help protect yourself.</li><li>Connect only to Wi-Fi hotspots with WPA/WPA2 encryption. The device will notify you if encryption is unavailable or prompt you for a password to indicate the encryption mechanism.</li><li>Disable remote file transfer over LAN.</li></ul>
          <br>Source:TJ <a href="https://journal.tinkoff.ru/public-wifi/#:~:text=%D0%92%20%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D0%B8%20%D1%81%202014%20%D0%B3%D0%BE%D0%B4%D0%B0,%D0%BD%D0%B0%20%D0%B3%D0%BE%D1%81%D1%83%D1%81%D0%BB%D1%83%D0%B3%D0%B0%D1%85%2C%20%D0%BB%D0%B8%D0%B1%D0%BE%20%D0%BD%D0%BE%D0%BC%D0%B5%D1%80%20%D1%82%D0%B5%D0%BB%D0%B5%D1%84%D0%BE%D0%BD%D0%B0" target="_blank">How safe is it to use public wifi?</a>`,
          article_3: `
            <p class="text-lg font-bold">Why city Wi-Fi networks are convenient and safe</p>
            <br>By early 2019, free Wi-Fi in St. Petersburg is available on Nevsky Prospekt, Petrogradsky Peninsula and most of the Central District. Vasilevsky and Aptekarsky Islands are partially covered.
            <br>Wi-Fi speeds do not exceed 1 Mbit/s. This value is quite sufficient for comfortable surfing, social networking and watching videos. During peak loads, users experience problems with the connection.
                        
            <br>
            <p class="font-bold">When connecting to a wireless network in St. Petersburg, you should keep in mind the security measures.</p>
            <ul class="list-disc pl-4">
              <li>It is not recommended to log into personal accounts of financial institutions or make payments.
              Authentication in social networks or other resources should be made two-factor. For example, the user enters credentials, and then confirms his actions with a one-time SMS. This method guarantees that cybercriminals will not be able to use the user's credentials.
              </li>
              <li>On a mobile device, through which the owner connects to Wi-Fi in St. Petersburg, should be installed. It must be configured to block "alien" incoming connections.</li>
              <li>It must be configured to block "alien" incoming connections.</li>
            </ul>
            <p>Zones of the city where free Wi-Fi in St. Petersburg is active, the map displays special symbols. It is constantly updated when new access points are installed.</p>
            <br>Source: <a href="https://vpautinu.com/public-areas/spb-free-wifi" target="_blank">Where can I find free wi-fi in St. Petersburg (SPb free WI-FI) </a>
          `,
          article_2: `
            <p class="font-bold text-lg">Wi-Fi in the St. Petersburg metro</p>
            <br>If you find yourself on the street and need access to the Internet, you can use one of the free Wi-Fi hotspots in the city. In St. Petersburg, the most popular place to connect to the Internet is public transport, and in particular the subway. Near the subway stations there are screens that give out Wi-Fi. Most of these screens are installed on the red, purple and blue lines.
            <br>At the moment, the Wi-Fi access point works at the stations themselves. There are already about 40 stations of St. Petersburg subway, and this year Wi-Fi will appear on all subway stations. If you need urgent access to the internet when you go down to the underground transport, you need to select a detected network with the name of the station you are in on your mobile device. Next, to connect to the WI-FI network in the train cars, you need to be identified with a smartphone or tablet. You can do this with a mobile number or an account on the portal Gosuslugi. 
            <br>Many St. Petersburg residents are positive about the speed and quality of free Internet in the subway, recommending it to tourists coming to the city. 
            <br>Source: <a href="https://www.fiesta.ru/spb/live/88-wi-fi-zone-petersburg/" target="_blank">160 free Wi-Fi access points in St. Petersburg | Blog Fiesta  </a>
          `,
          article_4: `
            <p class="font-bold text-lg">St. Petersburg - Smart City Project</p>
            <br>The concept of "Smart St. Petersburg" provides informatization of all spheres of life in the framework of the strategy of social and economic development of the city until 2030. The project is based on the examples of Moscow, Barcelona, Hamburg, Tampere and other cities where the Smart City system has already been implemented. 
            <br>Now in St. Petersburg there are more than 120 different information systems. For example, the project "Safe City", the portal of public services, Wi-Fi zone in the subway. At the development stage are projects of "smart" kindergarten and school.  
            <br>After analyzing the smart cities of the world, formed the concept for St. Petersburg. This is a project management program, aimed at improving the quality of life for all categories of citizens, the quality of urban management and the formation of a new economic space through the widespread introduction of smart technology. 
            <br>About 60 initiatives are already being considered. Among them - thermal waste incineration technology, which will enable to get heat and electricity from the garbage, infrastructure for electric cars, 3D map of St. Petersburg, the phone application for tourists. In addition, there are also social initiatives - for example, the introduction of a device that will allow the deaf, blind and mute to dialogue with other people.    
            <br>"Smart" St. Petersburg strategy should be a lucrative element that will allow the city to make a digital transformation, providing new channels of communication between the government, citizens and businesses, as well as improving the quality of services.   
            <br>Source: https://gorod-plus.tv/article/50290 
          `,
        },
      },
      ru: {
        translation: {
          title: "Wi-Fi точка | СПБ",
          welcome: "Доступный интернет для гостей и жителей Санкт-Петербурга",
          share:
            "Дайте доступ к вашему местоположению, чтобы найти точки Wi-Fi поблизости",
          tips: "Полезные советы",
          share_loc: "Разрешить местоположение",
          go_map: "Перейти к карте",
          main_tab: "Главная",
          map_tab: "Карта",
          coordinates: "Ваши координаты:",
          nearest: "Ближайшая открытая точка вайфая от вас в:",
          security: "Безопасность в общественных сетях",
          fast: "Городской WI-FI быстро и удобно",
          metro: "Интернет в метро СПБ",
          smart: "Проект - “Умный город”",
          article: "Статья",
          source: "Источник:",
          article_1: `<p class="text-lg font-bold">Как обезопасить себя при подключению к общественным сетям</p>
          Бесплатный общественный вайфай часто выручает там, где плохо ловит мобильный интернет
          или необходимо зайти в интернет с ноутбука. Но пользоваться им
          действительно стоит с осторожностью: многие публичные сети никак не
          защищены. Расскажу, почему общественные вайфай-сети уязвимы перед
          злоумышленниками и как можно обезопасить свои данные. <br> При подключении к
          публичному вайфаю вы соглашаетесь передавать свои данные владельцу сети.
          Анонимно пользоваться ими нельзя — чтобы подключиться, необходимо
          подтвердить свою личность. При регистрации в сети вы должны указать либо
          паспортные данные, либо учетную запись на госуслугах, либо номер телефона.
          Чаще всего используют последнее.<br> Мошенники иногда создают фальшивые точки
          доступа, мимикрирующие под проверенные. Для этого они меняют название
          своей сети и копируют страницу подключения к интернету. Такой метод взлома
          называется атакой «злого двойника»: поддельную точку доступа почти
          невозможно отличить от настоящей. Поэтому стоит подключаться к точкам, к
          которым есть определенное доверие - например, городские wi-fi сети
          Санкт-Петербурга.<br> <p class="font-bold">Что стоит и не стоит делать при подключении к
          общественному вайфаю</p> <ul class="list-disc pl-4"><li>Не вносите платежную информацию на сайтах и не
          используйте банковские приложения с подключенным вайфаем.</li> <li>Пользуйтесь
          только сайтами с цифровым сертификатом безопасности HTTPS.</li><li> Отключите
          автоматическое подключение к вайфай-точкам.</li><li>Используйте специальные
          программы.</li> <li> Защититься помогут легко доступные приложения, шифрующие трафик
          и меняющие IP-адрес.</li><li> Подключайтесь только к вайфай-точкам с механизмами
          шифрования WPA/WPA2. Устройство оповестит вас об отсутствии такой защиты
          или запросит пароль, указав механизм шифрования.</li><li> Отключите удаленную
          передачу файлов по локальной сети.</li></ul><br>Источник:ТЖ <a href="https://journal.tinkoff.ru/public-wifi/#:~:text=%D0%92%20%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D0%B8%20%D1%81%202014%20%D0%B3%D0%BE%D0%B4%D0%B0,%D0%BD%D0%B0%20%D0%B3%D0%BE%D1%81%D1%83%D1%81%D0%BB%D1%83%D0%B3%D0%B0%D1%85%2C%20%D0%BB%D0%B8%D0%B1%D0%BE%20%D0%BD%D0%BE%D0%BC%D0%B5%D1%80%20%D1%82%D0%B5%D0%BB%D0%B5%D1%84%D0%BE%D0%BD%D0%B0" target="_blank">Насколько безопасно пользоваться общественным вайфаем?</a>`,
          article_3: `
            <p class="text-lg font-bold">Почему городские сети вай-фай это удобно и безопасно</p>
            <br>К началу 2019 года бесплатный Wi-Fi в СПб доступен на Невском проспекте, Петроградском полуострове и большей части Центрального района. Частично охвачены Васильевский и Аптекарский острова.
            <br>Скорость передачи данных по Wi-Fi не превышает 1 Мбит/с. Значение вполне достаточное для комфортного серфинга, общения через социальные сети и просмотра видеороликов. Во время пиковых нагрузок у пользователей наблюдаются проблемы с подключением.
            <br>
            <p class="font-bold">При подключении к беспроводной сети Санкт-Петербурга следует помнить о мерах безопасности.</p>
            <ul class="list-disc pl-4">
              <li>Не рекомендуется заходить в личные кабинеты финансовых организаций или проводить платежи.</li>
              <li>Аутентификацию в социальных сетях или других ресурсах стоит сделать двухфакторной. К примеру, пользователь вводит учетные данные, а после подтверждает свои действия одноразовым СМС. Такой способ гарантирует, что киберпреступники не смогут воспользоваться учетными данными пользователя.</li>
              <li>На мобильное устройство, через которое владелец подключается к Wi-Fi Санкт-Петербурга, должен быть установлен антивирус. Его необходимо настроить на блокировку «чужих» входящих соединений.</li>
            </ul>
            <p>Зоны города, где активен бесплатный Wi-Fi в СПб, карта отображает специальными символами. Она постоянно обновляется при инсталляции новых точек доступа.</p>
            <br>Источник: <a href="https://vpautinu.com/public-areas/spb-free-wifi" target="_blank">Где можно найти бесплатный вай-фай в Санкт-Петербурге (SPb free WI-FI) </a>
          `,
          article_2: `
            <p class="font-bold text-lg">Wi-Fi в метро Санкт-Петербурга</p>
            <br>Если вы оказались на улице и вам понадобился доступ к сети, можете воспользоваться одной из точек бесплатного Wi-Fi города. В Санкт-Петербурге самым популярным местом подключения к интернету является общественный транспорт, а в частности метро. Возле станций метрополитена расположены экраны, раздающие Wi-Fi. Большинство данных экранов установлены на красной, фиолетовой и синей ветках. 
            <br>На данный момент точка доступа Wi-Fi работает и на самих станциях. Насчитывается уже около 40 станции петербургского метрополитена, а в этом году Wi-Fi появится на всех станциях метро. Если, спустившись к подземному транспорту, вам срочно понадобился доступ к интернету, то на мобильном устройстве необходимо выбрать обнаруженную сеть с названием станции, на которой вы находитесь. Далее для подключения к сети WI-FI в вагонах поездов, необходимо пройти идентификацию с помощью смартфона или планшета. Сделать это можно с помощью мобильного номера или учетной записи на портале Госуслуг. 
            <br>Многие жители Санкт-Петербурга положительно отзываются о скорости и качестве бесплатного интернета в метрополитене, рекомендуя его приезжающим в город туристам. 
            <br>Источник: <a href="https://www.fiesta.ru/spb/live/88-wi-fi-zone-petersburg/" target="_blank">160 точек доступа бесплатного Wi-Fi в Петербурге | Blog Fiesta </a>
          `,
          article_4: `
            <p class="font-bold text-lg">Санкт-Петербург - проект “умный город”</p>
            <br>Концепция «Умного Санкт-Петербурга» предусматривает информатизацию всех сфер жизни в рамках стратегии социального и экономического развития города до 2030 года. В основу проекта легли примеры Москвы, Барселоны, Гамбурга, Тампере и других городов, где уже внедрена система Smart Сity. 
            <br>Сейчас в Петербурге успешно работает более 120 различных информационных систем. Например, проект «Безопасный город», портал Госуслуг, зона Wi-Fi в метрополитене. На стадии разработки находятся проекты «умного» детского сада и школы. 
            <br>После анализа смарт городов мира, сформировалась концепцию и для Петербурга. Это программа управления проектами, направленная на улучшение качества жизни всех категорий граждан, качества городского управления и формирование нового экономического пространства за счет повсеместного внедрения интеллектуальных технологий. 
            <br>На рассмотрении уже находятся около 60 инициатив. Среди них - технология термического обезвреживания отходов, которая позволит получить тепловую и электроэнергию из мусора, инфраструктура для электромобилей, 3D карта Петербурга, телефонное приложение для туристов. Кроме того, есть и социальные инициативы - например, внедрение устройства, которое позволит слепоглухим, незрячим и немым вести диалог с другими людьми.  
            <br>«Стратегия «умного» Санкт-Петербурга должна стать доходчивым элементом, который позволит городу совершить цифровую трансформацию, обеспечив новые каналы коммуникации между властью, гражданами и бизнесом, а также повысить качество услуг.  
            <br>Источник: https://gorod-plus.tv/article/50290 
          `,
        },
      },
    },
    lng: "ru", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

const App = () => {
  return <TheRoot />;
};

export default App;
