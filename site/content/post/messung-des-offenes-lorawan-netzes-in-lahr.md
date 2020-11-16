---
title: Messung des offenes LoRaWAN Netzes in Lahr
date: 2020-11-11T13:07:00.000Z
description: Anleitung zur Erstellung eines LoRaWAN-Reichweite Mappers mit The
  Things Network.
image: img/radiusmap-lora-1.5km.png
---
Autor: David
Stand: 11.11.2020

## Was ist LoRaWAN, TTN und warum gibt es das in Lahr?

Seit längerem faszinieren wir uns für das Thema LoRaWAN, bzw. insbesondere das TheThingsNetwork (TTN). LoRaWan steht für “Long Range Wide Area Network” und ist ein Funknetzwerk, das mit hohen Reichweiten die ganze Stadt mit einen Zugang für IoT „Internet of Things“ bereitstellt. Wärend es auch geschlossene LoRaWAN Netze gibt, ist das Netz in Lahr komplett offen und ist Teil des [TheThingsNetwork](https://www.thethingsnetwork.org/). Der Community basierte Aufbau und der Open-Source Ansatz gefällt uns und hat den Vorteil Unabhängigkeit von kommerziellen Anbietern zu sein. Da wir das Thema schon einige Jahre auf dem Schirm haben, hatten wir zu unseren [Social Hackathons](http://integra-lahr.de/index.php/2020/10/19/4-social-hackathon-der-integra-lahr-ggmbh/) der IntegrA Lahr gGmbH das Thema immer mal wieder gepusht. Dann hatten wir die Idee [„LoRaWAN für Lahr“](https://www.lahr.de/gateways-fuer-die-nutzung-des-lorawan-installiert.129603.htm) beim Bürgerideenwettbewerb "Stadtgulden 2019" der Stadt eingereicht. Zu unserer Überraschung fand das Thema Anklang bei den Bürgerinnen und Bürger der Stadt und wurde zu einem der beliebtesten Projekte gewählt, wodurch der Aufbau eines Netzes finanziert wurde.

Mittlweile konnten wir als Initiatoren gemeinsam mit der Stadt Lahr und der Badenova AG ein Konzept aufbauen, bei welchem insgesamt 6 LoRaWAN Gateways in Lahr aufgebaut. 

![Erwartete Abdeckung des öffentlichen LoRaWAN Netzes in Lahr mit 2km je Gateway](img/radiusmap-lora-1.5km.png)

## Wo habe ich tatsächlich LoRaWAN Empfang?

Da die Reichweiten der Gateways stark von Umgebungsfaktoren abhängig sind (Lage des Gateways, Höhe, Bebauung etc.) hat sich die TTN-Community eine [Karte](https://ttnmapper.org/) aufgebaut, wo die Abdeckung des Netzes kartographiert wird. Es gibt verschiedene Möglichkeiten auf die Karte zu mappen, zum Beispiel mit Hilfe einer App, welche die GPS Signal des Handys benutzt und einem LoRaWAN Device, oder mit speziellen TTN-Mappern, die direkt mit GPS Sensor ausgestattet sind. Da die diesjährige CodeWeek online stattfand, hatten wir beschlossen, die Teilnehmer TTN-Mapper bauen zu lassen und bei sich zu Hause Empfang zu messen. Es gibt einen [Blog Beitrag](http://integra-lahr.de/index.php/2020/10/19/4-social-hackathon-der-integra-lahr-ggmbh/) der IntegrA Lahr gGmbH, welche die Veranstaltung beschreibt. Da wir aber mit der benutzen Hardware nur in den Experimentiermodus der TTN-Map mappen konnten, haben wir gemeinsam mit Felix und Mario vom senseBox-Team aus Münster die benutzte Hardware weiterentwickelt. Im folgenden findet sich die Dokumentation zum Nachbau:

## Bau eines TTN-Mappers

### Einleitung

Für den Bau des TTN-Mappers nutzen wir das [senseBox TTN-Mapper Set](https://sensebox.kaufen/product/sensebox-ttn-mapper-set) welches für 77 Euro erhältlich ist. Da viele auch noch einen [OLED-Display](https://sensebox.kaufen/product/led-display) verfügbar haben, wird auch die Option gezeigt, wie man diesen einbindet. Das Set mobil nutzen zu können, macht es Sinn außerdem noch eine CR1225 Knopfzelle für das GPS-Modul zu besorgen, eine Powerbank, oder [LiPo-Akku](https://eckstein-shop.de/LiPo-Akku-Lithium-Ion-Polymer-Batterie-37V-2000mAh-JST-PH-Connector)für mobile Stromversorgung und ein Micro-USB Kabel, welches für Dateinübertragung geeignet sein soll (z.B. altes Handykabel :-). 

### Aufbau der Hardware

Das LoRa-Bee steckt man auf XBee1 auf, sodass die Antenne des Bees vom Mikrocontroller weg zeigt. Das GPS-Modul wird mit Hilfe eines der JST-JST Kabel an einen der I2C/Wire Steckplätze angeschlossen. Die Knopfzelle kommt in das GPS-Modul. Falls ihr einen Display nutzt, wird dieser auch an einen der I2C/Wire Steckplätze angeschlossen. Das Micro-USB Kabel wird an den dafür vorgesehen Micro-USB-Port ageschlossen und mit dem USB-Port deines Laptops verbunden. Die Powerbank ersetzt dann später deinen Computer. Wenn du einen LiPo-Akku besorgt hast, kannst du den direkt in den JST-PH Steckeranschluss anschließen.

*Fritzing-Graphik-Aufbau*

### Einstellung in der TTN-Console

### 1. *Application und Device anlegen*

Gehe auf deine [TTN-Console](https://console.thethingsnetwork.org/) und lege eine neue Applikation an (Falls du noch kein Konto hast, musst du dir noch eines erstellen. Du gelangst auf eine Übersicht, mit allen deiner Applikationen. Dort kannst du auf "add application" klicken um eine neue Applikation anzulegen. Bennene deine "Application ID" (z.B. ttn-mapper-real) und beschreibe deine Applikation und klicke dann auf "Add Application".

![Erster Schritt bei TTN ist das anlegen einer Applikation](img/application-anlegen.png)

Dann erhälst du eine Übersicht mit deiner “Application ID” und die “Application EUIS”, welche du später brauchst. Nun musst du in deiner neuen Application noch ein Device hinzufügen. Gehe dafür unter der Rubrik “Devices” auf “register device”. Gib deinem Device eine “Device ID” ((z.B. ttn-mapper-real-device). Durch klicken auf die geschlungenen Pfeile (“generate”) bei “DeviceEUI” wird dir automatisch einen DeviceEUI generiert.

![Übersicht](img/device-anlegen.png)

Danach landest du wieder in einer Übersicht, diesmal für die Device Einstellungen. Schließlich musst du noch die "Activation Method" umstellen. Als Standard ist dort "OTAA" ausgewählt, für den TTN-Mapper möchten wir aber über "ABP" schicken. Gehe dafür in der "Device Overview" auf "Settings" und wähle dort unter "Activation Method" "ABP" statt "OTAA" aus. Vergesse nicht danach auf "save" zum speichern der Einstellung zu klicken. 

![Änderung der "Activation Method" auf "ABP"](img/abp-auswählen.png)

Nach ändern der Activation Method landest du wieder im "Device Overview". Man sieht schon, dass nach der Umstellung drei neue Werte angezeigt werden die wir gleich für dien Programm Code brauchen, "Device Adress", "Network Session Key" und "App Session Key". 

![Nach Änderung der "Activation Method" auf "ABP"](img/device-overview.png)

### 2. *Integration anlegen*

Da wir die Daten später an den TTN Mapper senden möchten, musst Du außerdem eine “Integration” hinzufügen. Diese findest du oben in deinem Menü. Klicke darauf und klicke dann gleich auf den Button mit der Aufschrift “Add Integration”. Dort hast du dann die Möglichkeit, verschiedenste Integrations hinzuzufügen, um die Daten von TTN an andere Services weiterzuleiten. Wähle dort den “TTN Mapper” aus. Gib nun eine “Process ID” an, die du frei wählen kannst (z.B. ich wähle den gleichen Namen wie die Application). Gib auch deine E-Mail Adresse an, für den Fall das Rückfrage zu deinen Daten entstehen. 

Dann kommt die Entscheidung, ob du deine Daten als Experiment verwenden möchtest, oder einfach nur Mappen willst. Deinem Experiment kannst du dort also einen Namen geben. Du könntest den Experimente Namen auch auslassen, bist dann aber nicht mehr in der Lage deine eigenen Messungen auf dem TTN Mapper zu identifizieren. Klicke dann auf “Add Integration”.

!["Die ausgefüllte Integration für den TTN-Mapper"](img/integration-anlegen.png)

### 3. "Payload Formats angeben"

Im letzten Schritt müssen wir noch ein sogenanntes Decoding-Profil anlegen. Dieses Profil decodiert im Prinzip die  Bytes welche später vom Device geschickt werden zu den ursprünglichen Werten zurück. Wenn dich die Theorie dahinter interessiert, kannst du das [hier](https://docs.sensebox.de/blockly/blockly-web-lora/) nachlesen. Klicke dafür auf "Payload Formats", dort findest du eine Textbox um Code einzufügen. Wie bei vielen Open-Source Projekten, findeten man im Internet oftmals schon fertige Decoding Profile, die man dann dort einfach einfügen kann. Wir nutzen hier die Arbeit von [Felix Erdmann](https://gist.github.com/felixerdy/f959ac03df98c6947f1c7f35d537f23e). Kopiere also seinen Code einfach in das Textfeld und klicke danach auf "speichern" 

```javascript
function Decoder(b, port) {
  var lat = (b[0] | (b[1] << 8) | (b[2] << 16) | (b[3] << 24)) / 10000000;
  var lon = (b[4] | (b[5] << 8) | (b[6] << 16) | (b[7] << 24)) / 10000000;
  var alt = (b[8] | (b[9] << 8)) / 10; // in m
  var pdop = (b[10] | (b[11] << 8)) / 100;

  return {
    latitude: lat,
    longitude: lon,
    altitude: alt,
    hdop: pdop,
  };
}
```

![Einfügen des Decoding Profils](img/decoding-anlegen.png)

### Programmieren des Mikrocontrollers

Der einfachste Weg die senseBox zu Programmieren ist mit Hilfe der visuellen Programmierumgebung [Blockly](https://blockly.sensebox.de/ardublockly/?board=sensebox-mcu). Theoretisch kann man aber auch mit der Arduino IDE arbeiten. Die Schwierigkeit der Programmierung ist etwas fortgeschritten, trotzdem kann jede(r) die folgenden Codes einfach nachklicken. Wir dokumentieren die Codes in der englischen Sprache, es gibt aber auch die Möglichkeit auf Deutsch umzustellen. Blockly ist sehr intuitiv zu verstehen. Einen Code baust du immer durch "Drag&Drop" aus verschiedenen einzelnen Blöcken. An der linken Seite finden sich alle vorgefertigten Blöcke mit denen du deinen Code bauen kannst und oben rechts findest du Funktionen und Features. 

### 4. "Initialisierung"

Blockly ist der Arduino Programmiersprache nachempfunden und besteht aus einer setup() und einer loop() Abschnitt im Code. im setup() werden Funktionen definiert die beim Start des Mikrocontrollers ausgeführt werden sollen. 

Hier möchten wir nun, dass sich unser Mikrocontroller mit TTN verbindet. Dazu braucht man verschiedene Keys aus deinem Device, welche du in der Übersicht deiner TTN Konsole findest. In Blockly klickst du auf "LoRa" und dann auf "Activation" und ziehst den Block mit dem Namen "Initialize LoRa (ABP)" auf die Programmierfläche in den loop() Abschnitt. Hier hast du die Möglichkeit 4 Felder auszufüllen.

> Falls in Eurer TTN Konsole die beschriebenen Begriffe nicht auftauchen, müsst ihr die "Activation Method" von OTAA auf ABP umstellen wie weiter oben beschrieben ;-) 

1. in das Feld "Network Session Key (msb)" kopierst du den Code aus deiner Device Übersicht. Bevor du diesen kopierst: *Ändere das Format des Codes auf msb durch klicken auf das "<>" Symbol* 
2. in das Feld "App Session Key (msb)" kopierst du den Code aus deiner Device Übersicht. Bitte ändere auch dort das Format auf msb. 
3. Die "Device Address" kannst du einfach so kopieren
4. Ins letzte Feld kannst du eingeben wie oft Daten vom Device übertragen werden sollen. Da der Mapper später mobil genutzt werden soll, macht es Sinn hier ein kleineres Intervall einzutragen.

> Wenn du aber stationäre Devices aufbaust, solltest du immer längere Intervalle eingeben und dich an die [Fair Use Policy](https://www.thethingsnetwork.org/community/rhein-sieg/post/fair-use-policy-vom-nehmen-und-geben-bitte-danke) der TTN Community halten.

![Block für die Initialisierung](img/setup-lora.svg)

### 5. "Schleife"

*TTN Mapper*
In der loop() Abschnitt des Codes kommen nun die Funktionen, die (solange das Board angeschalten ist) immer wieder wiederholt werden sollen. 

Glücklicherweise gibt es in Blockly die Option einen Code Block für den TTN-Mapper, der einen Großteil der Programmierung schon vorgefertigt hast. Du findest in in der Rubrik "LoRa" unter "TTN Mapper". Das wichtigste was wir übertragen wollen, ist unsere aktuelle Position, damit später auf dem TTN Mapper angezeigt wird, ob es an dieser Stelle ein LoRa-Signal gibt. In "latitude" "longitude" "altitude" fügen wir jeweils den Block für den GPS Sensor ein, mit dem jeweiligen value. Diesen Block findest du unter "Sensoren". Dann musst du noch den pDOP [Dilution of Precision](https://de.m.wikipedia.org/wiki/Dilution_of_Precision) , ein Maß für die Streubreite der Messwerte bei Satellitennaviagationssystemen einfügen. Schließlich noch den sogenannten "Fix Type", ein Wert der Auskunft über die aktuelle Stärke des GPS Signals gibt. Am Anfang des Blockls, kannst du Einstellen, ab welcher Stärke des GPS-Signals Daten an LoRa geschickt werden sollen. Im folgenden haben wir den Wert 3 angegeben, also nur bei sehr guten GPS Signalen sollen Daten verschickt werden.

![Der Block für den TTN-Mapper](img/loop-ttnmapper.svg)

*Statusanzeige mit der LED auf dem Mikrocontroller*
Wir bauen in den Loop noch eine Funktion, welche mit Hilfe der eingebauten LEDs anzeigt ob gerade GPS-Empfang vorliegt oder nicht. Leuchtet die BUILTIN_1 LED (in der Farbe grün), wenn "Fix Type" größer als 3 ist, bedeutet das, dein Mapper hat ein gutes GPS-Signal. Leuchtet die BUILLTIN_2 LED (in der Farbe rot), hat dein Mapper keinen guten GPS-Empfang. Wir nutzen dafür die if/do/else Funktion und die LEDs aus der Schaltfläche aus. Mithilfe einer Wartezeit, verzögert sich der Loop, damit dein Auge auch ein Unterschied erkennt. 

![Die zwei Status LED auf dem Board zeigen an, ob der TTN Mapper gerade einen GPS Signal empfängt](img/status-led.png)

*Statusanzeigt mit dem OLED-Display*
Falls du einen zur senseBox passenden OLED-Display hast, kannst du auch diesen nutzen um dein GPS-Signal anzuzeigen. Nutze dazu den Block "Print on Display" und den "Show Measurements" Block welchen man nutzt um Sensorwerte anzuzeigen. Im folgenden zeigen wir die "latitude" und die "longitude" an. Erhälst du den Wert 0, hast du kein GPS-Empfang und musst etwas warten.

> Vergesse nicht den Display im status() Abschnitt zu initialisieren!

![Die zwei Status LED auf dem Board zeigen an, ob der TTN Mapper gerade einen GPS Signal empfängt](img/status-display.png)

### 6. "Code Übertragen"

Nun fehlt nur noch Code auf den Mikrocontroller zu übertragen. Oben rechts siehst du einen runden Knopf mit Zahnräder. Wenn du auf diesen Knopf drückst, werden die Blöcke "kompiliert" und es entsteht ein Code, welcher vom Mikrocontroller gelesen werden kann. Klickst du auf den Knopf, entsteht eine Datei im Format ".bin" welche in deinem Download Ordner landet.

Schließe jetzt die senseBox an deinen USB-Port an, und doppelklicke den roten Button auf dem Board um den "Lernmodus" zu aktivieren, wie auch im folgenden Video gezeigt wird.

<a href="http://www.youtube.com/watch?feature=player_embedded&v=jzlOJ7Zuqqw
" target="_blank"><img src="http://img.youtube.com/vi/jzlOJ7Zuqqw/0.jpg" 
alt="Übertragen des Codes" width="240" height="180" border="10" /></a>

Dann kannst du den Code mit Drag&Drop auf dein Board laden und dein Mapper ist fertig.  Wenn du Probleme mit der Code Übertragung hast, kannst du auch nochmal [dieses Video](https://www.youtube.com/watch?v=f3UqvTFt7Ek&t=76s) anschauen.

### 7. "Funktioniert mein Mapper?"

Wenn dein Mapper funktioniert, sammelst du Werte welche auf der Website https://ttnmapper.org/ angezeigt werden. Schaue in deiner Nachbarschaft ob du ein Gateway entdeckst und wo du Signale empfängst. Es lohnt sich generell immer, am Anfang erst ein Experiment anzulegen um nur die Daten deines Mappers zu sehen und zu testen ob alles funktioniert.

![So sieht dein Experiment auf dem TTN-Mapper aus](img/experiment-mapper.png)

Deinen persönlichen TTN Mapper findest Du dann unter dem Namen deines Experiments. Öffne 

https://ttnmapper.org/experiments/?experiment=EXPERIMENT_NAME

und ersetze EXPERIMENT_NAME mit dem Namen deines Experiments. Es dauert ein bisschen bis die senseBox GPS Daten empfängt. Zwischendurch kannst Du die Seite neu laden um die neuesten Messungen zu sehen.

### 8. Hilfe

Du kannst in der TTN Konsole nachschauen ob LoRa Daten bei TTN ankommen. Klicke in deiner Application auf den Data Tab und die neusten Nachrichten sollten nach kurzer Zeit auftauchen. Falls keine Nachrichten ankommen schau nochmal über deine Keys die du aus TTN-Console übertragen hast und insbesondere auf deren Format. Ansonsten könnte es sein, dass in deiner Umgebung kein LoRa Gateway in Reichweite ist.

Es kann eine Weile dauern bis das GPS Modul Daten empfängt. Manchmal dauert es mehrere Stunden bei der ersten Nutzung. Wurden aber einmal Daten empfangen sollte es beim nächsten mal schneller funktionieren. Die Nutzung einer kleinen Knopfzelle verbessert den GPS Empfang.

Generell Hilfe zur senseBox findest du außerdem https://docs.sensebox.de und unter https://forum.sensebox.de.

Viel Spaß beim Nachbauen und Mappen!