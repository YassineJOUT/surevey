export const E: Array<string> = [
  "Vous êtes dynamique ?",
  "Vous aimez parler ?",
  "Vous pensez à voix haute ?",
  "Vous agissez, puis pensez ?",
  "Vous n’aimez pas être seul ?",
  "Vous aimez établir de nouveaux contacts ?",
  "Vous préférez parler plutôt qu’écrire ?",
  "Vous pouvez facilement être distrait ?",
  "Vous préférez faire plusieurs choses à la fois ?",
  "Vous avez parfois un discours changeant ?"
];

export const I: Array<string> = [
  "Vous êtes calme ?",
  "Vous aimez écouter ?",
  "Vous réfléchissez posément ?",
  "Vous pensez, puis agissez ?",
  "Vous vous sentez bien quand vous êtes seul ?",
  "Vous aimez approfondir vos contacts ?",
  "Vous êtes considéré comme plutôt secret et réservé ?",
  "Vous possédez une bonne capacité de concentration ?",
  "Vous préférez vous concentrer sur une seule chose à la fois ?",
  "Vous êtes indépendant ?"
];

export const S: Array<string> = [
  "Vous vous attachez aux faits et aux détails ?",
  "Vous aimez les choses utiles ?",
  "Vous vivez dans l'instant présent ?",
  "Vous faites confiance à l’expérience ?",
  "Vous aimez approfondir vos compétences ?",
  "Vous restez fidèle aux méthodes qui ont fait leurs preuves ?",
  "Vous préférez les instructions étape par étape ?",
  "Vous êtes pratique ?",
  "Vous aimez ce qui est concret, réel, directement observable ?",
  "Vous êtes réaliste : vous voyez ce qui existe ?"
];

export const N: Array<string> = [
  "Vous vous intéressez aux idées ?",
  "Vous remarquez tout ce qui est nouveau et différent ?",
  "Vous pensez aux implications futures ?",
  "Vous suivez votre instinct ?",
  "Vous aimez apprendre de nouvelles compétences ?",
  "Vous n’aimez pas la routine ?",
  "Vous cherchez à comprendre ?",
  "Vous êtes théorique ?",
  "Vous êtes attirés par les idées originales ?",
  "Vous êtes imaginatifs : vous voyez les possibilités ?"
];
export const T: Array<string> = [
  "Vous vous efforcez d'être objectif dans vos décisions ?",
  "Vous apparaissez calme et réservé ?",
  "Vous avez un sens aigu de la justice ?",
  "Vous vous impliquez peu, vous prenez de la distance ?",
  "Vous êtes critique (vous remarquez vite les failles et les défauts) ?",
  "Vous adorez argumenter pour le plaisir ?",
  "Vous êtes franc et direct ?",
  "Vous êtes motivé par vos projets ?",
  "Vous aimez vous placer en observateur ?",
  "Vous êtes sensible à la logique ?"
];
export const F: Array<string> = [
  "Vous fondez vos décisions sur vos valeurs et vos sentiments ?",
  "Vous êtes sociable et amical ?",
  "Vous avez tendance à la clémence ?",
  "Vous prenez les choses à cœur ?",
  "Vous tentez de faire plaisir (prompt à faire des compliments) ?",
  "Vous évitez la discussion et le conflit ?",
  "Vous êtes diplomate et faîtes preuve de tact ?",
  "Vous êtes motivé par l’estime des autres ?",
  "Vous êtes sensible (facilement blessé) ?",
  "Vous faîtes confiance à vos impressions ?"
];
export const J: Array<string> = [
  "Vous aimez organiser et planifier ?",
  "Vous êtes sérieux et conventionnel ?",
  "Vous suivez votre calendrier et êtes parfaitement ponctuel ?",
  "Vous aimez terminer vos projets ?",
  "Vous travaillez d'abord, vous vous amusez ensuite ?",
  "Vous n’aimez pas le stress de dernière minute ?",
  "Vous ne discutez pas les règles ?",
  "Vous cherchez à maîtriser",
  "Vous êtes à l’aise au sein de structures bien définies ?",
  "Vous n’aimez pas le provisoire, l’incertain ?"
];
export const P: Array<string> = [
  "Vous aimez vivre de façon flexible ?",
  "Vous êtes ludique et non-conventionnel ?",
  "Vous n’avez ni heure ni délais ?",
  "Vous aimez démarrer des projets ?",
  "Vous vous amusez d'abord et travaillez ensuite ?",
  "Vous rechignez à vous engager ?",
  "Vous discutez les règles ?",
  "Vous cherchez à comprendre ?",
  "Vous aimez conserver votre liberté d'action ?",
  "Vous restez ouvert, aimez vivre des expériences, vous adapter ?"
];

export const questionSet: Array<Array<string>> = [E, I, S, N, T, F, J, P];
export const letters: Array<string> = ["E", "I", "S", "N", "T", "F", "J", "P"];

export const titles: Array<string> = [
  "1.	Etes-vous plutôt « E » ou plutôt « I » ?",
  "2.	Etes-vous plutôt « S » ou plutôt « N » ?",
  "3.	Etes-vous plutôt « T » ou plutôt « F » ?",
  "4.	Etes-vous plutôt « J » ou plutôt « P » ?"
];

export const possibilies = {
  ESFJ: "le Soutien",
  ISFJ: "le Protecteur",
  ESTJ: "le Superviseur",
  ISTJ: "le Contrôleur",
  ESFP: "l’Artiste Interprète",
  ISFP: "le Compositeur",
  ESTP: "l’Organisateur",
  ISTP: "l’Artisan",
  ENFJ: "le Professeur",
  INFJ: "le Conseiller",
  ENFP: "le Défenseur",
  INFP: "le Guérisseur",
  ENTJ: "le Maréchal",
  INTJ: "le Cerveau",
  ENTP: "l’Inventeur",
  INTP: "l’Architecte"
};
export interface IIndexable {
   [key: string]: any;
 }

export const descriptions: IIndexable = {
  ENFJ:
    "Les personnes de ce type sont généralement chaleureuses et sympathiques. Centrées sur les autres" +
    " qu'elles comprennent naturellement, elles ont le don de percevoir et mettre en valeur le potentiel de" +
    " chacun, même s’il n’est pas immédiatement apparent. Leur plus grande satisfaction est de pouvoir" +
    " épauler leur prochain et elles s'y emploient avec enthousiasme et énergie, au détriment parfois de leurs" +
    " propres besoins." +
    " Ces personnes ont un système de valeurs et d'opinions extrêmement bien défini qu'elles sont capables" +
    " d'exprimer de manière claire et succincte, tant qu'elles ne doivent pas se dévoiler trop profondément." +
    " Elles craignent en effet que l'expression de leurs propres sentiments n'entrave le développement" +
    " personnel de leur entourage. Aimant avant tout jouer le rôle de catalyseur du changement, elles préfèrent" +
    " ainsi s'adapter aux besoins des autres à la manière d'un caméléon plutôt que faire passer leurs" +
    " convictions profondes en premier." +
    " Dans leurs relations affectives ou amoureuses, ces personnes sont loyales et prévenantes. Elles se" +
    " définissent souvent au travers de l'authenticité et la proximité des liens qu'elles tissent et entretiennent" +
    " avec leurs proches. Elles s'efforcent de faire durer leurs histoires car elles croient aux couples qui durent" +
    " toute une vie. Dotées d'excellentes compétences de communication, elles sont capables de tenir un" +
    " discours critique mais honnête si la situation l'exige, sans pour autant altérer leur écoute, ni mettre en" +
    " danger la relation. Bien qu'elles aient parfois du mal à s'extérioriser, elles ont besoin d'échanges positifs" +
    " avec leurs partenaires et se sentent mises en danger par les conflits qu'elles ont tendance à éviter." +
    " Lorsqu'elles fondent une famille, elles sont généralement des parents soutenants, aimants et recherchant" +
    " le meilleur pour leurs enfants qui peuvent quelquefois se sentir étouffés par un excès d’attention." +
    " Au niveau professionnel, ces personnes favorisent la structure de l'organisation qu'elles sont" +
    " excellentes à mettre en place, au risque de se révéler parfois un peu pointilleuses. Elles ont de" +
    " nombreuses possibilités de réalisation à partir du moment où leur intérêt a été piqué, mais de manière" +
    " générale, elles préfèrent la collaboration. Elles travaillent ainsi facilement en groupe, même si elles" +
    " apprécient de pouvoir ajouter une touche personnelle au résultat final. Centrées sur les aspects humains," +
    " elles sont peu à l'aise avec toute forme de raisonnement impersonnel ou d'analyse logique et globale." +
    " Elles aiment inspirer les autres et sont très douées pour les faire agir selon ce qu'elles en attendent, ce" +
    " qui peut d'ailleurs être parfois perçu comme de la manipulation bien qu'elles soient généralement" +
    " sincèrement désintéressées." +
    " Pour autant que leur cursus scolaire, leurs aptitudes, valeurs et intérêts y concourent en conjonction" +
    " avec des opportunités adéquates, ces personnes s'orientent de préférence vers des professions leur" +
    " permettant de mettre à profit leurs excellentes compétences humaines dans un environnement leur" +
    " offrant des défis stimulants, telles que diplomate, directeur de ressources humaines, consultant," +
    " psychologue ou professeur." +
    " En résumé, ces personnes sont stimulantes, franches, attentives, dignes de confiance et authentiques" +
    " dans leur volonté d'aider les autres à devenir le meilleur d'elles-mêmes. Elles perçoivent les besoins des" +
    " autres si clairement qu'elles sont capables d'y répondre avant même qu'ils soient exprimés et sont" +
    " heureuses lorsqu'elles peuvent rendre service. Si elles cherchent à se développer, ces personnes" +
    " gagneraient à tenir plus compte de leurs propres besoins pour éviter de se sacrifier à la tâche et favoriser" +
    " le partage dans leurs relations. Elles pourraient aussi apprendre à gérer les conflits de manière" +
    " constructive en cessant de se critiquer elles-mêmes et en comprenant que discuter des problèmes permet" +
    " de commencer à les résoudre alors que les fuir ne fait que les exacerber en les reportant à plus tard.",
  ENFP:
    "lLes personnes de ce type ont un grand potentiel intuitif et vivent généralement dans un monde riche" +
    " d’ouvertures diverses pour lesquelles elles peuvent se passionner facilement. Chaleureuses et" +
    " enthousiastes, elles ont une capacité déconcertante à motiver et inspirer les autres grâce à leur" +
    " optimisme, considérant la vie comme un don particulier dont il faut tirer le meilleur à tout prix." +
    " Ces personnes ont un système de valeurs auquel elles sont très attachées, qu'elles conservent et" +
    " s'efforcent de respecter tout au long de leur existence. Ayant tendance à s'ennuyer rapidement, elles" +
    " apprécient le plus souvent un certain changement qui leur permette de vivre de nouvelles expériences et" +
    " peuvent paraître incohérentes dans leurs choix. Mais elles sont en quête perpétuelle d'un sentiment de" +
    " paix intérieure et font tout ce qui est en leur pouvoir pour vivre en accord constant avec ce qu'elles" +
    " pensent être juste. Elles ont ainsi un grand besoin de passer du temps seules pour harmoniser leurs" +
    " actions et leurs valeurs. Elles sont aussi très indépendantes et résistent farouchement à toute forme de" +
    " contrôle, notamment si elles ont le sentiment que cela les empêche de profiter des nombreuses" +
    " opportunités de la vie." +
    " Dans leurs relations affectives ou amoureuses, ces personnes s'investissent avec énergie et" +
    " enthousiasme, quitte à paraître parfois un peu enfantines ou déraisonnables. Elles ont une habileté" +
    " exceptionnelle à comprendre intuitivement les autres, bien qu'il puisse leur arriver de tirer des" +
    " conclusions hâtives à partir de leurs perceptions. Elles sont profondément loyales et prennent leurs" +
    " engagements très au sérieux, faisant de leur mieux pour rendre leurs relations optimales. Mais elles" +
    " peuvent aussi ressentir une certaine difficulté à rester heureuses en couple, étant parfois cruellement" +
    " conscientes de toutes les autres possibilités qui pourraient s'offrir à elles. Perfectionnistes, elles sont très" +
    " sensibles aux conflits ou critiques et ont une certaine tendance à faire profil bas pour se sortir de" +
    " situations pénibles, risquant alors de ne pas respecter leur personnalité profonde. Elles ont aussi un" +
    " besoin important de se sentir appréciées et demandent souvent de nombreuses preuves d'affection à leur" +
    " partenaire, parfois même usant de manipulation pour parvenir à leurs fins. Lorsqu'elles fondent une" +
    " famille, elles sont des parents dynamiques et actifs, soucieux de transmettre leurs valeurs à leurs enfants." +
    " Au niveau professionnel, ces personnes sont flexibles et excellent dans la plupart des domaines qui" +
    " les intéressent, tant que la routine ne menace pas de s’installer. Elles assurent souvent le rôle de leaders" +
    " naturels grâce à leurs compétences interpersonnelles et de communication qui les rendent habiles à" +
    " motiver autrui, mais elles n'apprécient pas de contrôler les autres et d’imposer leur volonté." +
    " Pour autant que leur cursus scolaire, leurs aptitudes, valeurs et intérêts y concourent en conjonction" +
    " avec des opportunités adéquates, ces personnes s'orientent de préférence vers des professions peu" +
    " routinières où le développement de nouvelles idées et les contacts humains sont importants, telles que" +
    " psychologue, journaliste, acteur, professeur d'art ou consultant." +
    " En résumé, ces personnes sont appréciées, curieuses, sensibles et intuitives. Elles n'hésitent pas à" +
    " prendre des risques et ont de nombreuses capacités de réalisation de soi. Si elles cherchent à se" +
    " développer, ces personnes gagneraient à réaliser que les conflits ne présagent pas forcément des" +
    " désastres mais peuvent permettre de débloquer certaines situations. Elles pourraient aussi apprendre à" +
    " augmenter leur persévérance dans la poursuite de leurs projets et éviter de recourir à la manipulation" +
    " affective pour obtenir ce dont elles ont besoin.",
  ENTJ:
    "Les personnes de ce type sont généralement attentives et efficaces, scrutant constamment leur" +
    " environnement à la recherche d'éventuels obstacles, elles saisissent rapidement la complexité des" +
    " situations et prennent rapidement des décisions permettant la résolution des problèmes. Elles vivent dans" +
    " un monde de possibilités et de challenges qui leur permettent d’assumer facilement des rôles d’autorité" +
    " et de prendre fermement les choses en main. Elles le font d'ailleurs naturellement dans la plupart de" +
    " leurs activités, surtout si elles en retirent le prestige accordé à celui qui a permis de surmonter les" +
    " difficultés et vaincre les obstacles." +
    " Ces personnes ont pleine confiance en elles et ne se font pas prier pour démontrer que leur point de" +
    " vue est correct. Il leur est parfois difficile de comprendre que d'autres puissent avoir des perspectives" +
    " différentes même si elle respectent énormément ceux qui osent les confronter et défendre leurs idées." +
    " Dotées d'excellentes compétences oratoires, elles sont d'un naturel direct et ne s'encombrent pas de" +
    " détours inutiles pour exprimer le fond de leur pensée. Elles s'attendent d'ailleurs à ce que les autres en" +
    " fassent autant. Elles aiment participer à des débats contradictoires qu'elles trouvent toujours utiles, que" +
    " ce soit pour prouver qu'elles ont raison ou éviter l'erreur qu'elles auraient pu commettre." +
    " Dans leurs relations affectives ou amoureuses, ces personnes aiment avoir un certain contrôle des" +
    " situations. Elles valorisent en particulier les liens qui les stimulent et constituent des défis intéressants à" +
    " relever. Elles perçoivent toute expérience comme une opportunité d'apprentissage et de développement." +
    " Bien qu'elles prennent leurs engagements très au sérieux, il est fréquent qu'elles en redéfinissent les" +
    " règles pour s'adapter à l'évolution du contexte. Souvent très investies dans leur carrière professionnelle," +
    " il peut leur arriver, si elles n'y prennent pas garde, de négliger leur entourage en étant absentes" +
    " physiquement ou mentalement. Lorsqu'elles fondent une famille, elles sont généralement des parents" +
    " organisés qui cherchent à éduquer leur enfants de manière structurée et en accord avec les normes" +
    " sociales en vigueur." +
    " Au niveau professionnel, ces personnes se montrent assurées et créatives. Elles savent traduire les" +
    " théories et les possibilités en solides plans d'action, grâce à leur esprit logique et analytique. Elles" +
    " détestent l'inefficacité et ne supportent pas de voir les erreurs se répéter. Elles planifient ainsi leurs" +
    " activités à long terme en définissant des programmes clairs qu'elles respectent ensuite de manière" +
    " méthodique. Inspirant confiance, elles sont appréciées pour leurs compétences d'organisation et sont" +
    " volontiers suivies par leurs collègues. Possédant une autorité naturelle, elles peuvent se montrer fermes" +
    " et critiques en cas de besoin. Elles considèrent les sentiments comme une faiblesse et ne croient pas en" +
    " la nécessité d'en tenir compte dans leurs décisions, ce qui peut parfois les pousser à être un peu dures." +
    " Pour autant que leur cursus scolaire, leurs aptitudes, valeurs et intérêts y concourent en conjonction" +
    " avec des opportunités adéquates, ces personnes s'orientent de préférence vers des professions dirigeantes" +
    " qui les confrontent à des problèmes complexes qu'elles peuvent hiérarchiser et régler à l'aide de" +
    " solutions innovantes, telles que directeur administratif, juge, professeur, consultant en informatique ou" +
    " avocat." +
    " En résumé, ces personnes sont énergiques, franches, structurées et travailleuses, ne ménageant pas" +
    " leurs efforts pour atteindre les objectifs qu'elles se sont fixés. Elles ont aussi une aisance naturelle à" +
    " diriger et organiser leur environnement de manière stratégique et stimulante. Si elles cherchent à se" +
    " développer, ces personnes gagneraient à tenir plus souvent compte des aspects humains dans leurs" +
    " décisions pour modérer leur discours et diminuer le risque d’être blessantes. Elles pourraient aussi" +
    " s'efforcer de reconnaître la valeur des autres et le leur exprimer, de manière à mieux les soutenir et" +
    " éventuellement les associer à leurs entreprises.",
  ENTP:
    "Les personnes de ce type sont généralement créatives et rationnelles. Elles valorisent la connaissance" +
    " et cherchent constamment à développer leur compréhension du monde. Visionnaires et optimistes, elles" +
    " vivent dans un monde de possibilités où elles adorent relever des défis aussi complexes que délicats." +
    " Elles font totalement confiance à leur intuition pour les aider à surmonter d'éventuelles difficultés et se" +
    " montrent infatigables tant qu'elles n'ont pas trouvé de solution satisfaisante. Elles participent volontiers à" +
    " des joutes verbales au cours desquelles il peut leur arriver de défendre un point de vue différent du leur," +
    " pour le seul plaisir du débat." +
    " Ces personnes ont une capacité déconcertante à comprendre les gens et les situations au quotidien." +
    " Saisissant les choses rapidement et en profondeur, elles assimilent facilement les idées et aiment en" +
    " discuter. Elles sont souvent plus intéressées par la récolte de nouvelles informations que par l'utilisation" +
    " des données déjà connues. Lorsqu'elles ont une décision à prendre, elles se basent en principe sur une" +
    " liste de règles et de lois objectives, parfois même au mépris d'éléments plus personnels ou humains," +
    " risquant ainsi d'être perçues comme peu éthiques ou malhonnêtes." +
    " Dans leurs relations affectives ou amoureuses, ces personnes sont très décontractées et attractives" +
    " grâce à leur joie de vivre et leurs excellentes capacités de communication. Même s'il leur arrive" +
    " d'entamer une discussion sur un sujet sensible avec leur conjoint, juste pour le plaisir de l'explication," +
    " elles sont constamment à la recherche du développement de leur relation conjugale. Elles s'engagent" +
    " ainsi avec entrain dans toute nouvelle activité susceptible de l'améliorer, mais si elles n'y prêtent pas" +
    " garde, elles risquent de se laisser entraîner dans un projet personnel excitant, négligeant sans le vouloir" +
    " leur relation et les sentiments de leur conjoint. Lorsqu'elles fondent une famille, elles sont généralement" +
    " des parents enthousiastes et attentifs qui se mettent volontiers à l'écoute de leurs enfants et les stimulent" +
    " abondamment." +
    " Au niveau professionnel, ces personnes sont flexibles et s'adaptent facilement à de nombreuses" +
    " tâches différentes. Lorsqu'elles sont intéressées, elles se révèlent douées dans la plupart des activités" +
    " qu'elles entreprennent. Leur grande capacité d'improvisation leur permet de venir à bout des problèmes" +
    " les plus insolubles et de concevoir des plans ingénieux pour dégager de nouvelles stratégies au sein de" +
    " l'entreprise. Cependant, elles ont horreur de la routine et ont le plus souvent tendance à se décharger de" +
    " la réalisation des projets qu'elles ont conçus. Bien qu'elles n'aiment pas contrôler les autres, elles sont" +
    " pourtant d'excellents leaders capables d'encourager l'indépendance de leurs collègues et d'agir comme" +
    " catalyseur en leur transmettant leur passion pour le travail." +
    " Pour autant que leur cursus scolaire, leurs aptitudes, valeurs et intérêts y concourent en conjonction" +
    " avec des opportunités adéquates, ces personnes s'orientent de préférence vers des professions qui leur" +
    " laissent une certaine marge de liberté dans la mise à profit de leur créativité, telles que juriste, ingénieur," +
    " entrepreneur, avocat ou acteur." +
    " En résumé, ces personnes sont logiques, inventives, audacieuses, vives et très indépendantes." +
    " Confiantes en leurs capacités, elles sont attirées par les concepts, les challenges et les difficultés qu'elles" +
    " excellent à résoudre de manière originale. Si elles cherchent à se développer, ces personnes gagneraient" +
    " à être plus attentives au moment présent afin de reconnaître et valoriser les apports et les sentiments des" +
    " autres. Elles pourraient ainsi intégrer plus souvent des éléments extérieurs, personnels et subjectifs," +
    " dans leur processus de décision et paraître ainsi moins individualistes.",
  ESFJ:
    "Les personnes de ce type sont altruistes, amicales et pleines de tact, elles s’intéressent aux autres et" +
    " savent mettre à l'aise. Elles sont capables de comprendre les autres en profondeur et de les guider afin" +
    " qu'ils tirent le meilleur d'eux-mêmes. Elles sont très attentionnées et s’ingénient à rendre les gens" +
    " heureux autour d'elles, notamment grâce à l'énergie qu'elles puisent dans leur propre désir de plaire." +
    " Mais ce besoin d'approbation les rend aussi très sensibles à l'indifférence et à la méchanceté qu'elles ne" +
    " comprennent pas et qui les blessent profondément." +
    " Ces personnes n’éprouvent aucune timidité à exprimer leurs opinions forgées à partir d’un système" +
    " de valeurs clairement défini qui leur donne une idée très précise de comment les choses devraient être ou" +
    " ne pas être. Elles respectent les lois, les règles et les autorités et pensent que tout le monde devrait en" +
    " faire autant, au risque de tendre parfois vers un certain dogmatisme si elles ne relativisent pas" +
    " suffisamment les situations. Elles sont plutôt conformistes et préfèrent suivre les procédures établies" +
    " plutôt que s'aventurer dans des territoires inexplorés. Elles prennent leurs responsabilités très à coeur et" +
    " sont extrêmement fiables. Elles valorisent la sécurité et la stabilité et ont tendance à exercer un contrôle" +
    " étroit sur leur existence, parfois aussi sur celle des autres." +
    " Dans leurs relations affectives ou amoureuses, ces personnes mettent beaucoup d'énergie à" +
    " développer et maintenir leur intimité avec les autres. Elles ont un grand besoin fusionnel qui les rend" +
    " très possessives, ce qui les expose parfois à des déceptions. Généreuses d’elles-mêmes, elles ont aussi" +
    " tendance à considérer qu’elles sont mal payées en retour. Elles gèrent mal les conflits et les critiques" +
    " qu'elles interprètent comme des mises en accusation. Elles y réagissent le plus souvent en modifiant leur" +
    " manière d'être pour mieux correspondre aux attentes ou par des tentatives de contrôle et de manipulation" +
    " de l'autre. Lorsqu'elles fondent une famille, ces personnes sont souvent des parents responsables, sur" +
    " lesquels leurs enfants peuvent compter au quotidien. Elles sont excellentes dans la gestion de leur foyer," +
    " notamment au niveau financier, et oublient rarement de célébrer les événements familiaux importants." +
    " Au niveau professionnel, ces personnes sont très bien organisées. Elles aiment créer ou maintenir" +
    " l'ordre et les structures nécessaires au bon fonctionnement d'une entreprise. Elles n'apprécient" +
    " généralement pas les tâches impliquant de travailler avec des concepts abstraits ou théoriques, pas plus" +
    " que les analyses impersonnelles. Comme dans leur vie privée, elles tirent leur plus grande satisfaction de" +
    " ce qu'elles peuvent donner ou faire pour les autres. Elles sont extrêmement efficaces dans le travail en" +
    " équipe et se révèlent d'excellents leaders car elles savent susciter la motivation grâce à des relations" +
    " sociales chaleureuses et une bonne maîtrise de la communication." +
    " Pour autant que leur cursus scolaire, leurs aptitudes, valeurs et intérêts y concourent en conjonction" +
    " avec des opportunités adéquates, ces personnes s'orientent facilement vers des professions exigeant de" +
    " grandes compétences humaines associées à un bon sens de l'organisation, telles que conseiller, infirmier," +
    " enseignant ou secrétaire médical." +
    " En résumé, ces personnes sont chaleureuses, coopératives, structurées, enthousiastes et secourables." +
    " Elles aspirent à une vie harmonieuse et riche en contacts humains qu'elles trouvent le plus souvent dans" +
    " la stabilité, l'ordre et le respect des traditions. Si elles cherchent à se développer, ces personnes" +
    " gagneraient à reconnaître l'aspect parfois constructif des conflits et apprendre à les gérer tout en tenant" +
    " mieux compte de leurs propres besoins et en évitant de manipuler les autres. Elles pourraient aussi se" +
    " montrer plus critiques et réservées relativement à l’acceptation de certaines règles et apprendre à les" +
    " remettre en question, autrement dit à se méfier de leur excès de conformisme qui peut les faire paraître" +
    " un peu ternes ou trop soumis aux yeux de leur entourage.",
  ESFP:
    "Les personnes de ce type sont généralement gaies et pleines de vie, appréciant les gens, les activités" +
    " sociales et les nouvelles expériences. Elles aiment se retrouver au centre de l'attention des groupes et s'y" +
    " emploient en cherchant à amuser et divertir les autres. Taxées souvent d’épicuriennes ou d’hédonistes," +
    " elles vivent dans « l'ici et maintenant » et recherchent toujours les situations qui leur procurent des" +
    " sensations fortes ou du moins une certaine forme d’excitation." +
    " Ces personnes prennent la majorité de leurs décisions sur la base de leur système de valeurs" +
    " personnel, sans tenir compte de la théorie ou des conséquences potentielles à long terme auxquelles elles" +
    " préfèrent éviter de penser. Si elles n'y prennent pas garde, elles risquent parfois d'attribuer plus" +
    " d'importance à des gratifications immédiates qu'à leurs devoirs et obligations. Elles ne sont donc pas" +
    " toujours les meilleures conseillères mais sont malgré tout très habiles à apporter une aide pratique." +
    " Grandes observatrices, elles remarquent rapidement ce qui ne va pas chez les autres et y répondent de" +
    " manière généreuse et concrète. Cette aptitude doublée de compétences interpersonnelles bien" +
    " développées leur donne souvent un rôle de conciliateur dans les groupes auxquels elles appartiennent." +
    " Dans leurs relations affectives ou amoureuses, ces personnes sont spontanées et très concernées par" +
    " le bien-être de ceux qui les entourent. Sympathiques et chaleureuses, elles sont appréciées de leur" +
    " entourage et sont réputées pour être des hôtes exceptionnels. Elles traitent et acceptent chacun comme" +
    " un ami, mais peuvent aussi se montrer très rancunières lorsqu'elles ont été blessées. Elles aiment être" +
    " amoureuses et rendre leur conjoint heureux en profitant du moment présent sans se poser trop de" +
    " questions au sujet de l’avenir. Détestant faire des projets futurs, elles peuvent avoir du mal à s'engager," +
    " même si elles remplissent leur quotidien de marques d'affection concrètes à l’intention de leur" +
    " partenaire, comme par exemple par des cadeaux ou des gestes affectueux. Face à la critique, elles ont" +
    " tendance à se sentir personnellement attaquées et il se peut alors que leurs paroles dépassent parfois leur" +
    " pensée, ce qu'elles regrettent par la suite. Lorsqu'elles fondent une famille, elles sont généralement des" +
    " parents aimants et créatifs, mais qui risquent de ne pas donner assez de structure à leurs enfants s'ils n'y" +
    " sont pas suffisamment attentifs." +
    " Au niveau professionnel, ces personnes sont souvent très compétentes dans de nombreux domaines." +
    " Elles aiment énormément travailler en groupe et valorisent la collaboration. Elles sont capables de briser" +
    " facilement la glace avec leurs collègues qu'elles incitent à l'action de manière dynamique et naturelle." +
    " Elles facilitent ainsi les échanges et gèrent efficacement les crises. Ayant l'esprit pratique, elles" +
    " apprennent beaucoup mieux si elles peuvent expérimenter par elles-mêmes, tout en s'appuyant sur leur" +
    " grande compétence d'improvisation. Elles détestent la routine et s’ennuient rapidement dans une" +
    " structure trop rigide ou pauvre en activités variées et sociales." +
    " Pour autant que leur cursus scolaire, leurs aptitudes, valeurs et intérêts y concourent en conjonction" +
    " avec des opportunités adéquates, ces personnes s'orientent de préférence vers des professions mettant à" +
    " profit leurs aptitudes interpersonnelles et leur procurant suffisamment de défis à relever, telles que" +
    " comédien, consultant, animateur ou travailleur social." +
    " En résumé, ces personnes sont charmeuses, spirituelles, flexibles et optimistes, sachant profiter au" +
    " maximum des plaisirs de la vie. Elles sont aussi capables de faire face en toutes circonstances, grâce à" +
    " leur sens pratique et à la grande attention qu'elles apportent aux détails. Si elles cherchent à se" +
    " développer, ces personnes gagneraient à développer leur sens de la prévoyance de manière à mieux" +
    " estimer les conséquences de leurs actes avant de prendre une décision, ce qui leur éviterait certaines" +
    " mauvaises surprises. Elles pourraient aussi dominer leur susceptibilité et apprendre que la critique est" +
    " parfois constructive et peut permettre l'établissement de relations durables et solides.",
  ESTJ:
    "Les personnes de ce type ont généralement confiance en elles et sont dynamiques. Elles prennent les" +
    " choses en main et ont du talent pour concevoir des plans d'action car elles savent définir rapidement les" +
    " tâches nécessaires à l'accomplissement d'un objectif. Cette compétence fait d'elles des leaders naturels," +
    " capables de prendre des décisions rapides et de les communiquer sans détours." +
    " Ces personnes ont un système de valeurs extrêmement exigeant qui respecte scrupuleusement les lois" +
    " et les traditions. Elles vivent dans un monde de faits et de besoins concrets où elles valorisent le savoirfaire" +
    " et l'efficacité, appréciant que les efforts développés apportent des résultats rapides et visibles. Il" +
    " peut ainsi leur arriver de paraître critiques et rigides à cause d'un manque de patience ou de" +
    " compréhension envers ceux qui ne satisferaient pas à leurs critères. Très souvent assimilées au" +
    " stéréotype du citoyen modèle, elles apprécient avant tout la sécurité et l'ordre qu’elles ont tendance à ne" +
    " jamais trouver suffisants." +
    " Dans leurs relations affectives ou amoureuses, ces personnes mettent un point d'honneur à" +
    " accomplir leur devoir vis-à-vis de ceux qu'elles aiment. Lorsqu'elles s'engagent dans une relation, elles" +
    " considèrent que c'est pour la vie car elles ont besoin de stabilité. Elles se révèlent alors extrêmement" +
    " dévouées et protectrices, au risque d’exercer un contrôle exagéré sur leur conjoint, particulièrement dans" +
    " les situations où elles ne parviennent pas à se remettre en question. Organisées mais non pas ternes, elles" +
    " apprécient de pouvoir s'amuser et interagir avec les autres, ce qui les rend facilement drôles et" +
    " exubérantes dans des rencontres sociales. En revanche, en cas de stress intense elles risquent de se sentir" +
    " incomprises et exploitées, comme si tous les efforts qu’elles fournissent pour assurer le bon" +
    " fonctionnement de leur environnement allaient de soi. Elles ont alors beaucoup de mal à mettre des mots" +
    " sur leurs sentiments pour les communiquer aux autres et en tirent une certaine frustration. Lorsqu'elles" +
    " fondent une famille, elles sont généralement des parents aimants et responsables, soucieux de bien" +
    " cadrer leurs enfants en imposant à leur famille des valeurs plutôt conservatrices." +
    " Au niveau professionnel, ces personnes se révèlent très flexibles et compétentes quel que soit le" +
    " domaine d'activité, grâce à leur aisance à concrétiser un projet. Rationnelles et systématiques, elles" +
    " appuient leurs actions sur des données concrètes et des méthodes éprouvées. Elles ont une capacité" +
    " naturelle à diriger car elles savent fixer des objectifs et les faire respecter dans les délais impartis. Elles" +
    " réprouvent fortement le manque de soin et de productivité, mais ont parfois du mal à exprimer leurs" +
    " exigences de manière socialement acceptable, risquant ainsi de blesser les sentiments d'autrui en ne" +
    " tenant compte que de la logique et de la raison." +
    " Pour autant que leur cursus scolaire, leurs aptitudes, valeurs et intérêts y concourent en conjonction" +
    " avec des opportunités adéquates, ces personnes s'orientent de préférence vers des professions qui leur" +
    " permettent de trouver et maintenir l'ordre et la structure dont elles ont besoin pour se rassurer, telles que" +
    " professeur, officier militaire, juge, policier ou directeur (établissement scolaire, entreprise, etc.)." +
    " En résumé, ces personnes sont dignes de confiance, enthousiastes, réalistes, stables et franches et" +
    " n'hésitent pas à s'impliquer complètement dans tout ce qui leur tient à coeur sans rechigner à remplir des" +
    " obligations qu’elles se sont souvent elles-mêmes imposées. Si elles cherchent à se développer, ces" +
    " personnes gagneraient à mieux accepter et gérer leurs émotions, dans le sens de mieux les apprivoiser et" +
    " pouvoir ainsi les communiquer plus aisément. Elles pourraient aussi apprendre à être plus tolérantes en" +
    " se montrant moins rigides et en reconnaissant les efforts et sentiments des autres, même s'ils ne" +
    " correspondent pas exactement à leurs propres attentes.",
  ESTP:
    "Les personnes de ce type vivent dans un monde d'action où elles appréhendent les choses en fonction" +
    " de leurs cinq sens. Elles cherchent généralement à affronter les situations directement et n'hésitent pas à" +
    " prendre des risques ou se salir les mains pour atteindre un objectif. Ces personnes vivent dans le présent," +
    " en accord avec le proverbe « demain est un autre jour ». Elles préfèrent inventer plutôt que suivre un" +
    " plan. Elles sont très réactives face aux problèmes qu'elles décortiquent selon les faits et la logique. Elles" +
    " évaluent ainsi une situation de crise avec pertinence et sont capables de proposer rapidement une" +
    " solution à appliquer pour pouvoir passer à autre chose. Elles ont aussi tendance à être réfractaires aux" +
    " théories et il est fréquent qu'elles ne se sentent pas à l'aise ou qu’elles s’ennuient dans les études qu’elles" +
    " peuvent juger sans utilité concrète." +
    " Ces personnes ont une capacité déconcertante à percevoir les attitudes et motivations des autres. Elles" +
    " sont très attentives aux détails et relèvent même de menus changements d'attitude ou expressions qui" +
    " passeraient totalement inaperçus à d'autres. Cette compétence leur permet d'ailleurs souvent d'obtenir ce" +
    " qu'elles veulent. Pour elles, les lois et les règles s'apparentent plutôt à des indications facilitant les" +
    " rapports, plutôt qu'à des impératifs à respecter scrupuleusement. Par contre, elles ont leurs propres" +
    " représentations du Bien et du Mal et les respectent avec force et passion en toute circonstance." +
    " Ces personnes sont excellentes pour raconter des histoires et improviser car elles ont le sens de la" +
    " mise en scène et sont très à l'aise verbalement. Elles sont en général drôles et appréciées. Cependant, il" +
    " peut arriver que leur discours soit blessant car elles manquent d’intuition et prennent rarement" +
    " conscience de l'effet produit par leurs paroles." +
    " Dans leurs relations affectives ou amoureuses, ces personnes sont capables de tirer le meilleur de" +
    " chaque moment. Elles sont généreuses et se révèlent particulièrement charmantes, surtout en début de" +
    " relation. Les engagements à long terme peuvent les mettre mal à l'aise car elles ont du mal à se projeter" +
    " très loin dans le futur et lorsqu'elles s'engagent sincèrement dans une relation, elles essaient" +
    " généralement de la vivre au jour le jour. Lorsqu’elles fondent une famille, ces personnes deviennent des" +
    " parents très proches de leurs enfants et passent beaucoup de temps avec eux, peut-être grâce à leur petit" +
    " côté enfantin." +
    " Au niveau professionnel, ces personnes préfèrent des situations comme la vente et la représentation," +
    " leur permettant d'être constamment actives et en interaction avec les gens. Elles ont un potentiel" +
    " d'énergie et d'enthousiasme qu'elles sont très habiles à transmettre aux autres pour les motiver à l'action." +
    " Elles sont très douées pour prendre des décisions et initier les projets, même si elles ont plutôt tendance" +
    " à laisser aux autres le soin de les mener à terme." +
    " Pour autant que leur cursus scolaire, leurs aptitudes, valeurs et intérêts y concourent en conjonction" +
    " avec des opportunités adéquates, ces personnes s'orientent facilement vers des professions" +
    " entrepreneuriales telles que représentant de commerce, entrepreneur, spécialiste en marketing ou" +
    " paramédical." +
    " En résumé, ces personnes sont réalistes, flexibles, généreuses, enthousiastes, drôles et capables de" +
    " réalisations remarquables dans des domaines variés. Elles savent transmettre leur motivation facilement" +
    " et improviser rapidement pour trouver une solution innovante lorsqu'elles sont confrontées à un" +
    " problème imprévu. Si elles cherchent à se développer, ces personnes gagneraient à augmenter leur" +
    " capacité d’empathie afin de tenir compte davantage des sentiments des autres et ménager leur" +
    " susceptibilité. Elles pourraient ainsi augmenter leur capacité à communiquer et à faire des compromis," +
    " ce qui contribuerait à les faire paraître, le cas échéant, moins « carrées » en les amenant à mieux" +
    " maîtriser l'impact de leurs paroles sur leur entourage.",
  INFJ:
    "Les personnes de ce type sont plutôt intuitives et leurs relations avec le monde extérieur s'établissent" +
    " sur la base de ce qu'elles ressentent au plus profond d'elles-mêmes, bien qu'elles ne parviennent pas" +
    " forcément à l'expliquer. Elles ont une grande facilité à comprendre les autres et les situations, même" +
    " sans les connaître parfaitement. Leur intuition spontanée fait d'elles des individus complexes et" +
    " profonds, mais parfois difficiles à comprendre. Elles sont plutôt secrètes car elles tiennent à " +
    " leur monde intérieur, dont elles dévoilent uniquement les éléments qu'elles ont choisis, au moment où" +
    " elles l'ont décidé." +
    " Ces personnes sont des perfectionnistes qui doutent constamment d'être au maximum de leur" +
    " potentiel. Cela les empêche le plus souvent d'être en paix avec elles-mêmes car elles pensent qu'il est" +
    " toujours possible de progresser. Elles s’efforcent donc de vivre en accord avec un système de valeurs" +
    " exigeant qu’elles ont souvent tendance à appliquer à autrui. De ce fait, elles attendent énormément" +
    " d'elles-mêmes et des autres et ne remettent que rarement en question leurs idéaux élevés. Rejetant les" +
    " compromis, elles accordent une confiance inébranlable à leurs instincts, ce qui les pousse parfois à" +
    " adopter une attitude obstinée, voire à ignorer l'opinion d'autrui ou les conventions sociales. Cette rigueur" +
    " personnelle peut faire d’elles des personnes tourmentées ou insatisfaites, surtout lorsque" +
    " l’environnement ne répond pas à leurs attentes en matière d’authenticité et de justice." +
    " Dans leurs relations affectives ou amoureuses, les personnes de ce type tendent à établir des liens" +
    " intenses et significatifs et elles sont prêtes à consacrer beaucoup d'efforts pour les préserver." +
    " Lorsqu’elles se sentent en sécurité, elles se montrent chaleureuses et amicales, mais restent toujours un" +
    " peu secrètes ou du moins sur une certaine réserve. Elles apprécient particulièrement l’idée d’occuper une" +
    " place privilégiée dans le coeur de ceux qu’elles ressentent comme proches. Elles cherchent souvent à" +
    " éviter les conflits qu'elles tolèrent très mal en raison de leur grande émotivité. Il est d'ailleurs fréquent" +
    " qu'une situation conflictuelle provoque chez elles un état d'agitation et de rage tout à fait surprenant pour" +
    " les personnes qui les connaissent mal et habituées à une façade plutôt calme et pacifique. Lorsqu'elles" +
    " fondent une famille, elles sont généralement des parents affectueux, très concernés par les sentiments de" +
    " leur entourage et elles font leur possible pour éviter de blesser quiconque, essayant sans cesse de réparer" +
    " et de consoler, acceptant volontiers le rôle de confident." +
    " Au niveau professionnel, ces personnes ont besoin de travailler dans un cadre sécurisant qui leur" +
    " permette de vivre au quotidien en accord avec leurs valeurs et de donner un sens à leur vie en étant à la" +
    " fois créatives, indépendantes et ouvertes aux nouvelles expériences. Elles ne recherchent pas" +
    " particulièrement les postes de direction mais apprécient un certain pouvoir occulte au sein de l'entreprise" +
    " qui les emploie (être celle ou celui auprès de qui on peut exprimer des plaintes). Les professions sociales" +
    " leur conviennent donc particulièrement, mais elles ont parfois aussi une affinité naturelle pour l'art ou" +
    " les sciences, disciplines dans lesquelles elles peuvent utiliser leur intuition." +
    " Pour autant que leur cursus scolaire, leurs aptitudes, valeurs et intérêts y concourent en conjonction" +
    " avec des opportunités adéquates, ces personnes s'orientent volontiers vers des professions telles que" +
    " médecin psychiatre ou pathologiste, travailleur social, enseignant, psychologue, religieux, professionnel" +
    " des médias, conseiller en éducation, artiste, musico-thérapeuthe ou toutes médecines alternatives." +
    " En résumé, ces personnes sont généreuses, disponibles et prêtes à l’écoute, mais aussi déterminées et" +
    " utiles dans la résolution des problèmes interpersonnels, bien qu’elles cachent souvent des aspects" +
    " vulnérables et secrets. Les talents particuliers qu'elles possèdent ne sont pas communs et ne leur facilitent" +
    " pas la vie mais leur donnent une grande profondeur et aussi la capacité de réaliser des choses peu" +
    " communes. Si elles cherchent à se développer, ces personnes gagneraient à se détendre et être plus" +
    " spontanées et ouvertes à ce qui peut se passer dans l'instant présent en apprenant à mieux maîtriser leur" +
    " anxiété.",
  INFP:
    "Les personnes de ce type travaillent généralement dur pour faire du monde un meilleur endroit où" +
    " vivre. Elles ont un grand besoin de trouver un sens à leur vie qui leur donne les lignes directrices à" +
    " suivre puis s'efforcent d'atteindre les objectifs qu'elles se sont fixés. Elles comptent beaucoup sur leur" +
    " intuition pour les guider dans la découverte ce qui se cache derrière la façade des choses afin d’y" +
    " apporter des améliorations." +
    " Ces personnes se montrent le plus souvent conciliantes et décontractées, mais peuvent devenir" +
    " cassantes ou même parfois agressives lorsque leur système de valeur est menacé. Elles sont alors" +
    " capables de défendre passionnément leur cause même si en temps normal elles évitent autant que" +
    " possible les confrontations. Face à un conflit, elles se positionnent généralement en fonction de leurs" +
    " sentiments et émotions, peu intéressées de savoir qui a raison ou tort. Pour elles, ce qui compte avant" +
    " tout est de se sentir mieux et il peut arriver que, d’un point de vue extérieur, leurs réactions semblent" +
    " irrationnelles ou démesurées." +
    " Dans leurs relations affectives ou amoureuses, ces personnes sont fondamentalement intéressées" +
    " par les autres et cherchent à les aider en toutes circonstances. Elles sont d'excellents médiateurs pour les" +
    " problèmes des autres car elles comprennent naturellement leur point de vue et leurs sentiments. Elles" +
    " sont ainsi très appréciées et recherchées pour leur écoute, même si elles-mêmes sont souvent plutôt" +
    " réservées dans l'expression de leurs émotions. N'accordant pas leur confiance facilement, elles sont par" +
    " contre totalement loyales dès lors qu'elles s'engagent dans une relation, même s'il peut leur arriver de" +
    " rêver à des relations plus parfaites ou romantiques. Lorsqu'elles fondent une famille, elles sont" +
    " généralement des parents aimants et présents qui soutiennent et encouragent leurs enfants au maximum." +
    " Au niveau professionnel, ces personnes ont besoin de s'investir dans leur travail comme dans une" +
    " cause essentielle à leur évolution personnelle. Elles sont plutôt perfectionnistes et ont des exigences" +
    " extrêmement élevées vis-à-vis d'elles-mêmes et des autres. Il est d'ailleurs fréquent qu'elles peinent à" +
    " s'attribuer le mérite de leurs réussites. Elles peuvent aussi avoir certaines difficultés à travailler en" +
    " groupe si elles n'en ont pas le contrôle ou doivent composer avec des attentes inférieures aux leurs," +
    " quant aux tâches à accomplir. Focalisées sur leurs sentiments, elles ont du mal à gérer les faits concrets" +
    " et logiques qu'elles trouvent impersonnels et comprennent rarement. Elles sont par contre souvent" +
    " douées pour l'écriture qui est leur moyen d'expression favori et qu'elles maîtrisent avec brio." +
    " Pour autant que leur cursus scolaire, leurs aptitudes, valeurs et intérêts y concourent en conjonction" +
    " avec des opportunités adéquates, ces personnes s'orientent de préférence vers des professions qui leur" +
    " permettent de se développer en accord avec leurs valeurs et pour le bien de l'humanité, telles que" +
    " psychologue, écrivain, architecte, professeur ou religieux." +
    " En résumé, ces personnes sont dévouées, flexibles, idéalistes et pacifiques, cherchant constamment à" +
    " aider les autres et améliorer le monde du mieux qu'elles peuvent. Elles s'enthousiasment aussi facilement" +
    " pour tout ce qui concerne l'accomplissement personnel. Si elles cherchent à se développer, ces personnes" +
    " gagneraient à trouver un équilibre entre leurs idéaux élevés et les exigences de la vie afin de composer" +
    " avec la réalité et devenir ainsi moins vulnérables. Elles pourraient aussi apprendre à dire « non » afin" +
    " d’éviter des situations qui ne leur conviennent pas et aussi se souvenir qu'elles ne sont pas forcément" +
    " responsables de toutes les situations conflictuelles auxquelles elles peuvent être confrontées. Elles se" +
    " déchargeraient ainsi du lourd fardeau de la responsabilité du bonheur des autres et du monde entier en" +
    " général et disposeraient ainsi de plus de temps pour se réaliser, s’occuper d’elles-mêmes et vivre" +
    " l’instant présent de manière plus détendue.",
  INTJ:
    "Les personnes de ce type sont généralement volontaires et énergiques. Vivant dans un monde d'idées" +
    " et de plans stratégiques, elles valorisent l'intelligence, le savoir et la compétence. Elles ne laissent rien" +
    " traîner, effectuent les travaux aussi vite que possible et ont des standards d'exigence extrêmement élevés" +
    " qu'elles s'efforcent sans cesse de satisfaire. Elles n'en attendent pas moins des autres et méprisent par" +
    " dessus tout le laisser-aller, l’incompétence et la paresse." +
    " Ces personnes sont de grandes observatrices du monde qui les entoure, ce qui leur permet de nourrir" +
    " leur imagination et leur créativité. Elles s'emploient ainsi à générer des idées et des possibilités en" +
    " associant entre elles les nombreuses informations qu'elles récoltent systématiquement. Très perspicaces," +
    " elles sont capables de saisir rapidement les nouveaux concepts mais surtout de les appliquer" +
    " efficacement aux besoins éventuels. Elles sont souvent le siège d’une vie interne riche et effervescente" +
    " et bien qu'il ne soit pas toujours aisé pour elles de rendre compte de leurs mécanismes de pensée tels" +
    " qu'elles les utilisent, elles parviennent assez bien, si leur sens pédagogique est suffisamment développé," +
    " à traduire leurs idées en plans ou système d'actions compréhensibles par leurs pairs." +
    " Dans leurs relations affectives ou amoureuses, ces personnes font de leur mieux pour favoriser" +
    " l'évolution positive de leurs liens. Elles prennent leurs engagements très au sérieux, mais ne sont pas" +
    " opposées à les redéfinir si nécessaire. Elles croient à l'importance de l'indépendance dans les relations," +
    " ce qui peut parfois les empêcher de ressentir ou de répondre de manière adéquate aux besoins" +
    " émotionnels de leurs partenaires. Souvent centrées sur leur propre vie interne, elles peuvent avoir" +
    " quelquefois du mal à réconcilier leurs attentes avec la réalité, auquel cas elles ont tendance à se faire" +
    " confiance et penser qu'elles ont raison. Elles se sentent rarement menacées par les conflits et tendent à y" +
    " répondre de manière rationnelle et logique. Lorsqu'elles fondent une famille, elles sont généralement des" +
    " parents éclairés et capables qui prennent le temps d'écouter leurs enfants, même si elles ne saisissent pas" +
    " toujours la charge émotionnelle cachée derrière les manifestations visibles." +
    " Au niveau professionnel, ces personnes sont ambitieuses et peuvent se révéler des leaders" +
    " accomplis, bien qu'elles préfèrent n'endosser ce rôle qu'en cas de nécessité. Stratèges avant tout, elles se" +
    " montrent très efficaces lorsqu'il s'agit de sélectionner un projet ou une idée qui correspondra le mieux" +
    " aux besoins et objectifs de l'entreprise. Elles excellent pour repérer les éléments inadéquats ou" +
    " problématiques d’une situation et y proposer des solutions appropriées. Elles aiment l'organisation et les" +
    " défis autant qu'elles détestent le désordre et l'inefficacité. Plutôt intuitives, elles sont rapides dans la" +
    " prise de décisions et le jugement mais il peut arriver qu'elles se sentent incomprises si elles ne prennent" +
    " pas la peine d'expliciter leurs choix." +
    " Pour autant que leur cursus scolaire, leurs aptitudes, valeurs et intérêts y concourent en conjonction" +
    " avec des opportunités adéquates, ces personnes s'orientent de préférence vers des professions qui leur" +
    " demandent de saisir des théories complexes avant de les appliquer à des situation concrètes sous forme" +
    " de stratégies à long terme, telles que physicien, ingénieur, analyste de systèmes informatiques ou" +
    " scientifique et toutes professions techniques ou administratives." +
    " En résumé, ces personnes sont indépendantes, déterminées, analytiques et pleines de ressources" +
    " lorsqu'elles sont confrontées à des situations difficiles. Logiques, tenaces et persévérantes, elles ont" +
    " autant le goût que le sens de l'organisation et elles ne s'avouent jamais vaincues face aux défis les plus" +
    " difficiles. Si elles cherchent à se développer, ces personnes gagneraient à donner plus souvent raison aux" +
    " autres afin de paraître moins directives et « humaniser » ainsi leur image auprès de leurs collègues ou" +
    " leurs proches. Elles pourraient aussi mieux expliciter leurs processus de réflexion et la démarche" +
    " générale de leur pensée afin de favoriser la communication de leurs idées et se sentir ainsi affectivement" +
    " moins isolées et mieux comprises.",
  INTP:
    "Les personnes de ce type vivent généralement dans un monde de possibilités théoriques où elles" +
    "perçoivent assez aisément le devenir des choses et la manière dont elles pourraient être améliorées. Elles" +
    "ont une capacité d'analyse très développée qui leur permet d'identifier les problèmes et d'y proposer des" +
    "explications logiques. Cette habileté naturelle peut les conduire à un sentiment de responsabilité face à" +
    "la société qu'elles pensent devoir aider à progresser vers une meilleure compréhension des phénomènes" +
    "sociaux et humains." +
    "Ces personnes sont souvent excellentes à générer, confirmer ou infirmer des postulats grâce à leur" +
    "esprit en constante ébullition. Elles valorisent l'intelligence qu'elles considèrent comme la capacité à" +
    "appréhender la théorie de manière cartésienne pour y trouver des solutions à la plupart des difficultés" +
    "concrètes. Elles ont tendance à n'attribuer qu'une faible importance au monde extérieur et peuvent" +
    "d'ailleurs sembler distraites ou rêveuses aux yeux des autres. Mais elles sont souvent objectivement" +
    "critiques dans leurs analyses qu'elles abordent avec enthousiasme et scepticisme, ignorant les règles," +
    "autorités et opinions établies afin de définir leur propre méthode de résolution des problèmes. Elles" +
    "aiment l'abstraction et les idées nouvelles et ont ainsi beaucoup de plaisir à discuter de concepts avec" +
    "leurs pairs savants. Elles sont tolérantes et flexibles dans la majorité des cas, mais peuvent aussi se" +
    "montrer très rigides lorsque l'une de leurs croyances est brutalement attaquée ou remise en question." +
    "Dans leurs relations affectives ou amoureuses, ces personnes préfèrent habituellement la qualité à la" +
    "quantité. Elles sont le plus souvent mystérieuses et secrètes tant qu'elles n'ont pas la preuve que leur" +
    "confiance est méritée. Elles ont ainsi plutôt tendance à cultiver un nombre restreint d'amitiés intenses" +
    "auxquelles elles tiennent beaucoup. Bien que leur vie intérieure extrêmement riche les empêche parfois" +
    "de répondre aux besoins émotionnels des autres, elles sont malgré tout totalement loyales et franches" +
    "envers leur conjoint dès lors qu'elles s'engagent dans une relation sérieuse. Lorsqu'elles fondent une" +
    "famille, elles sont généralement des parents créatifs et débordants d'imagination pour mener à bien leur" +
    "rôle d'éducateurs." +
    "largement travailler de manière individuelle, appréciant particulièrement de pouvoir développer des" +
    "théories et de concepts originaux. Elles ont des exigences de performance élevées qu'elles s'appliquent à" +
    "respecter au mieux, ce qui les incite à valoriser avant tout la compétence et le savoir chez leurs" +
    "collègues. Elles ont une facilité déconcertante à saisir rapidement des problématiques complexes pour en" +
    "extraire des démarches d'applications concrètes. Mais elles laissent ensuite aux autres le soin de les" +
    "exécuter car elles détestent le travail de routine et préfèrent concevoir plutôt que réaliser." +
    "Pour autant que leur cursus scolaire, leurs aptitudes, valeurs et intérêts y concourent en conjonction" +
    "avec des opportunités adéquates, ces personnes s'orientent de préférence vers des professions qui leur" +
    "offrent un degré élevé d'autonomie et la possibilité de travailler sur des éléments théoriques et" +
    "hypothétiques, telles que mathématicien, ingénieur, chimiste, scientifique informaticien ou toute" +
    "profession exigeant un haut degré de réflexion." +
    "En résumé, ces personnes sont indépendantes, rationnelles, logiques et créatives lorsqu'elles peuvent" +
    "mettre leur esprit à contribution. Vivant dans leur monde intérieur, elles passent souvent pour le" +
    "« professeur distrait » et ne sont pas très attentives aux besoins et expressions d’autrui. Analysant sans" +
    "cesse, elles s’ingénient à créer des idées nouvelles qu’elles expliquent le plus souvent de manière très" +
    "originale et, du point de vue intellectuel qui est leur niveau de fonctionnement presque exclusif, elles ne" +
    "font généralement confiance qu’à elles-mêmes ou à quelques rares spécialistes. Si elles cherchent à se" +
    "développer, ces personnes gagneraient à être plus attentives aux sentiments des autres afin de mieux les" +
    "respecter et enrichir ainsi leurs relations sociales qui sont plutôt rares. Elles pourraient aussi s'efforcer" +
    "d'adapter leur discours abstrait à ceux qui les écoutent afin de favoriser la communication de manière à" +
    "paraître moins complexes et « redescendre sur terre » un peu plus souvent.",
    ISFJ: "Les personnes de ce type sont généralement chaleureuses, sympathiques et dignes de confiance. Elles"+
   " vivent dans un monde concret et bienveillant où elles valorisent l'harmonie et la coopération pour"+
   " essayer de révéler le meilleur d’elles-mêmes et de chacun."+
   " Ces personnes ont une vie intérieure très riche sans que leur entourage en soit toujours conscient."+
   " Dotées d’une mémoire excellente, en particulier pour les détails qui leur paraissent importants"+
   " relativement à leur système de valeurs, elles sont ainsi capables de mémoriser des informations très"+
   " précises à propos de personnes ou situations qui les ont marquées. Extrêmement conscientes de leurs"+
   " émotions et réceptives à celles des autres, elles ont pourtant souvent du mal à les exprimer sans y être"+
   " contraintes. Elles sont donc plutôt silencieuses et discrètes jusqu'au moment où, si leur entourage ne"+
   " reconnaît pas leur existence et leur spécificité, elles laissent exploser tout ce qu'elles ressentent sous"+
   " l'effet d’une colère difficilement prévisible. Elles risquent alors d'avoir des paroles irréfléchies, qu'elles"+
   " regrettent par la suite."+
   " Dans leurs relations affectives ou amoureuses, ces personnes sont le plus souvent altruistes et"+
   " généreuses car elles ont tendance à placer les besoins des autres avant les leurs. Elles sont très"+
   " recherchées pour leur grande capacité d'écoute et leur disponibilité. Il peut d'ailleurs arriver qu'elles"+
   " soient utilisées contre leur gré si elles n'améliorent pas leur compétence à dire « non ». Toujours à la"+
   " recherche de relations exclusives et durables, elles n'ont aucun mal à s'engager profondément et sont très"+
   " fidèles à leur conjoint. Si une relation tourne mal, elles peinent souvent à en accepter la fin et ont"+
   " tendance à porter toute la responsabilité de l'échec sur leurs épaules car elles gèrent mal les conflits et"+
   " font tout leur possible pour éviter les confrontations pénibles. Lorsqu'elles fondent une famille, elles"+
   " sont généralement des parents aimants, justes et fiables sur lesquels leurs enfants peuvent compter en"+
   " toutes circonstances."+
   " Au niveau professionnel, ces personnes valorisent la pratique par rapport à la théorie qui leur paraît"+
   " bien trop abstraite pour permettre un quelconque apprentissage. Elles se révèlent très performantes pour"+
   " mener un projet à terme car elles y travaillent sans relâche jusqu'à ce qu'elles aient atteint leurs objectifs."+
   " Respectueuses des traditions établies, elles ont tendance à considérer que les procédures existantes sont"+
   " les meilleures et elles sont peu enclines à tenter de faire différemment, à moins qu'on ne leur prouve"+
   " concrètement que la nouvelle méthode est plus efficace. En règle générale elles n’aiment pas prendre la"+
   " responsabilité de changements dans leur mode de faire, préférant suivre les instructions reçues."+
   " Pour autant que leur cursus scolaire, leurs aptitudes, valeurs et intérêts y concourent en conjonction"+
   " avec des opportunités adéquates, ces personnes s'orientent de préférence vers des professions leur"+
   " permettant d'utiliser leurs excellentes facultés d'observation et d'anticipation. Elles sont en effet"+
   " particulièrement habiles pour développer des structures d'aide ou de réponse à des problèmes humains"+
   " ou sociaux, mais ont également besoin d’un cadre bien défini pour travailler en toute sécurité. On les"+
   " trouvera donc plus souvent exerçant des professions conventionnelles ou sociales, telles que"+
   " bibliothécaire, employé de bureau, assistant social, infirmier ou enseignant."+
   " En résumé, ces personnes sont disciplinées, responsables, loyales, sensibles, réservées, empathiques"+
   " et consciencieuses. Elles n'hésitent pas à prendre du temps pour écouter ou aider leurs semblables en"+
   " difficulté, quoi qu’il leur en coûte. Si elles cherchent à se développer, ces personnes gagneraient à mieux"+
   " prendre en compte leurs propres désirs et sentiments. Une meilleure maîtrise de leurs émotions pourrait"+
   " en effet les aider à affronter plus facilement les situations problématiques plutôt que les fuir. Elles"+
   " pourraient ainsi améliorer leur estime d'elles-mêmes et augmenter leurs chances d’éviter les éruptions"+
   " dues à un excès d'émotions ou de frustrations.",
   ISFP: "Les personnes de ce type sont généralement ouvertes et très attentives aux informations apportées par"+
  " leurs cinq sens, elles ressentent spontanément leur environnement et s'en servent pour déterminer leur"+
  " comportement. Elles aiment les animaux, les enfants, et tout particulièremement la nature qui les touche"+
  " par sa beauté. Elles apprécient l'art et ont souvent elles-mêmes des tendances artistiques."+
  " Ces personnes possèdent un système de valeurs solide. Elles cherchent à mener une vie qui leur"+
  " permette de combler leurs besoins au quotidien tout en respectant au maximum leurs idéaux. Plutôt"+
  " réservées, elles ont tendance à garder leurs idées et opinions pour elles, même si leur instinct les pousse"+
  " à se rebeller contre tout ce qui pourrait entraver leur développement personnel. Elles ont aussi un grand"+
  " besoin de solitude pour réfléchir et faire le point. Elles respectent d'ailleurs beaucoup ceux qui prennent"+
  " le temps de les comprendre et de les soutenir dans la poursuite de leurs objectifs."+
  " Dans leurs relations affectives ou amoureuses, ces personnes se montrent amicales et réceptives aux"+
  " autres. Elles sont souvent extrêmement perspicaces et précises dans leur compréhension des autres,"+
  " s'ingéniant à saisir le sens caché des informations qu'elles reçoivent. Elles aiment pouvoir participer au"+
  " bien-être de leur entourage et y consacrent autant d'énergie qu'elles l'estiment nécessaire. Elles"+
  " recherchent des engagements à long terme et les prennent très au sérieux. Elles ont souvent du mal à"+
  " parler de leurs sentiments profonds, parfois même à leur conjoint, car elles craignent le conflit. Elles"+
  " vivent en effet leurs émotions de manière intense et se sentent personnellement menacées face à la"+
  " critique. Elles ont un grand besoin d'être rassurées et soutenues au quotidien. Lorsqu'elles fondent une"+
  " famille, elles sont généralement des parents chaleureux qui valorisent et respectent le besoin"+
  " d'indépendance de leurs enfants, tout en étant à l'écoute de leurs besoin et prêts à les aider autant que"+
  " nécessaire."+
  " Au niveau professionnel, ces personnes sont plutôt orientées vers l'action. Elles sont rarement à"+
  " l'aise avec les concepts et la théorie, préférant apprendre en exécutant les tâches. Elles se refusent à"+
  " prendre des décisions basées sur de simples raisonnements logiques et préfèrent les évaluer à la lumière"+
  " d'éléments subjectifs, qu'elles considèrent plus humains. Indépendantes, elles ont besoin d'espace et ne"+
  " veulent pas plus contrôler les autres qu'être dirigées, même si elles se montrent toujours prêtes à rendre"+
  " service. Elles s'investissent énormément dans les activités en lesquelles elles croient. Elles ont souvent"+
  " tendance au perfectionnisme, se jugeant alors plus durement que de raison par rapport à des critères"+
  " disproportionnés."+
  " Pour autant que leur cursus scolaire, leurs aptitudes, valeurs et intérêts y concourent en conjonction"+
  " avec des opportunités adéquates, ces personnes s'orientent de préférence vers des professions cohérentes"+
  " avec leur système de valeur et leur offrant un espace individuel suffisant dans une atmosphère de travail"+
  " détendue, telles que musicien, pédiatre, artiste, vétérinaire ou conseiller."+
  " En résumé, ces personnes sont dévouées, loyales, créatives, idéalistes et généreuses, mais leurs"+
  " comportements et réactions ne sont pas toujours prévisibles. Très attachées aux idées du beau et du vrai,"+
  " elles sont souvent très exigeantes avec elles-mêmes et ont une sensibilité esthétique marquée, que ce soit"+
  " dans la création artistique ou l'appréciation d'oeuvres d'art. Si elles cherchent à se développer, ces"+
  " personnes gagneraient à travailler leur sens de la communication en ouvrant plus souvent leur monde"+
  " interne aux autres, tout en s'exerçant à poser des limites et dire « non » en cas de besoin. Elles pourraient"+
  " aussi apprendre à se juger moins durement et reconnaître leurs compétences pour améliorer leur"+
  " confiance en elles-mêmes et raffermir leur sentiment de bien-être.",
  ISTJ: "Les personnes de ce type sont généralement calmes, modestes et réservées, cherchant à vivre une vie"+
 " paisible et sécurisante, appréciant le plus souvent un environnement bien entretenu et bien structuré,"+
 " aménagé avec goût et simplicité, sans originalité particulière."+
 " Ces personnes sont en principe perçues comme de bons citoyens sur lesquels on peut compter et leurs"+
 " avis se révèlent le plus souvent judicieux. Elles tendent à placer leur confiance dans les lois et les"+
 " traditions, auxquelles elles restent fidèles. Elles sont aussi très attachées à l'honnêteté et l'intégrité et"+
 " pensent que les tâches doivent être effectuées selon des procédures et plans bien établis. Il se peut"+
 " d'ailleurs qu'elles tombent parfois dans une certaine rigidité mais sont aussi capables d'humour selon les"+
 " situations. Elles accordent une grande attention aux faits concrets et peuvent avoir de la difficulté à"+
 " comprendre des théories auxquelles elles ne trouvent pas immédiatement une utilité pratique. Mais si"+
 " elles adoptent des idées nouvelles, elles se montrent ensuite convaincues et loyales en supportant leur"+
 " cause au maximum pour s'assurer qu'elles ont bien accompli leur devoir."+
 " Dans leurs relations affectives ou amoureuses, bien qu'elles aient souvent du mal à percevoir les"+
 " besoins émotionnels des autres, ces personnes se révèlent extrêmement prévenantes et secourables,"+
 " notamment grâce à leur sens du devoir et leur capacité à développer des solutions. Elles sont aussi des"+
 " partenaires engagés et loyaux, même si elles peuvent rencontrer certaines difficultés à se montrer"+
 " chaleureuses et encourageantes à cause de leur tendance à exprimer leur affection par des actes plutôt"+
 " qu'au travers de mots. Lorsqu'elles fondent une famille, elles sont généralement des parents responsables"+
 " et généreux qui prennent leur rôle très au sérieux."+
 " Au niveau professionnel, ces personnes sont organisées et méthodiques, capables de trouver la"+
 " motivation nécessaire à des travaux de longue haleine et de consacrer une grande énergie à"+
 " l'accomplissement de leur tâche. Ce trait les rend extrêmement fiables, mais peut parfois les desservir"+
 " car elles ont du mal à poser des limites, ce dont certaines personnes peuvent tenter de tirer profit. En"+
 " principe, elles préfèrent travailler seules, tout en étant capables de s'adapter à une activité de groupe"+
 " lorsque la situation l'exige. Elles occupent de préférence un poste de niveau hiérarchique intermédiaire"+
 " et sont excellentes pour définir et organiser leurs tâches, ayant à coeur de les mener à terme avec sérieux"+
 " et persévérance. Elles sont très responsables mais lorsqu'elles sont soumises à un stress important, il"+
 " peut leur arriver de perdre leur capacité à appréhender les choses calmement et auront alors tendance à"+
 " déprimer, ne voyant plus que le mauvais côté ou le caractère inquiétant de la situation."+
 " Pour autant que leur cursus scolaire, leurs aptitudes, valeurs et intérêts y concourent en conjonction"+
 " avec des opportunités adéquates, ces personnes s'orientent de préférence vers des professions exigeant à"+
 " la fois de l’esprit d’entreprise et un grand sens de l’organisation, telles que directeur d'entreprise,"+
 " programmeur informatique, expert comptable, officier de police ou juge."+
 " En résumé, ces personnes sont douées, logiques, raisonnables et efficaces, notamment pour"+
 " structurer une tâche ou un projet. Elles ont un désir important de promouvoir la sécurité et la paix. Si"+
 " elles cherchent à se développer, elles gagneraient à cesser de considérer ce qu'elles accomplissent"+
 " comme la réalisation naturelle de leurs obligations. Elles pourraient aussi être plus sensibles aux besoins"+
 " d’autrui, se montrer un peu moins critiques et apprendre à encourager et complimenter leurs proches"+
 " plus souvent, autrement dit, à se montrer un peu plus chaleureuses et détendues vis-à-vis de leur"+
 " entourage.",
 ISTP: "Les personnes de ce type sont généralement habiles et douées pour l'analyse logique qu’elles"+
" appliquent de préférence lorsqu’elles tentent de comprendre un fonctionnement, une machine ou un"+
" processus. Elles s'intéressent aux théories et concepts uniquement si elles peuvent leur trouver une"+
" application pratique, elles aiment donc avant tout imaginer et inventer."+
" Ces personnes sont attirées par la nouveauté et le changement. Elles privilégient donc l'action, allant"+
" parfois jusqu’à goûter au risque et à l'aventure. Elles sont susceptibles de s'ennuyer assez rapidement si"+
" aucun élément nouveau ne les tient en haleine. Farouchement indépendantes, elles n’obéissent que peu"+
" aux règles et n'aiment pas suivre des ordres et des conseils. Malgré leur tendance libertaire, elles sont"+
" néanmoins absolument convaincues que chacun doit être traité avec équité et justice. Elles ont besoin"+
" d'espace et de solitude pour prendre leurs décisions, afin de pouvoir calmement trier les informations et"+
" les données nécessaires aux bons choix. Elles considèrent en effet que les jugements doivent être fondés"+
" uniquement sur des faits concrets et empiriques, et cela de manière impartiale. Très attachées à l’idée de"+
" ce qui est vrai et juste, elles ont souvent du mal à faire des concessions et à tenir compte de leurs"+
" émotions qu'elles tendent à ignorer au maximum, craignant que celles-ci ne troublent leur jugement et"+
" n’émoussent leur créativité."+
" Dans leurs relations affectives ou amoureuses, ces personnes sont appréciées pour leur capacité à"+
" rendre chaque moment unique et excitant. Elles vivent dans l'instant présent et sont peu enclines à"+
" s’engager à long terme, mais s'investissent au quotidien pour les liens qui les satisfont. Détestant la"+
" routine, elles résistent à toute tentative de contrôle et se battent pour conserver un espace vital"+
" d'indépendance. Elles ont tendance à conserver une part de mystère, préférant répondre aux questions"+
" qu'on leur pose par d'autres questions, évitant d’exprimer des émotions et explosant parfois lorsque"+
" celles-ci débordent leur capacité de résistance. Lorsqu'elles fondent une famille, elles sont généralement"+
" des parents attentifs et respectueux des besoins d'intimité et d'indépendance de leurs proches mais elles"+
" sont très attachées à préserver leur propre liberté."+
" Au niveau professionnel, ces personnes sont débrouillardes, autonomes et spontanées. Elles restent"+
" généralement calmes en situation de crise, ce qui leur permet de prendre des décisions rapides et"+
" efficaces, tout en ayant un effet apaisant sur leurs collègues. Dotées de bonnes connaissances"+
" techniques, elles savent tenir compte des détails pratiques qui leur permettront de résoudre les"+
" difficultés. Elles sont aussi extrêmement habiles de leurs mains et apprennent mieux lorsqu'elles peuvent"+
" expérimenter. Elles préfèrent éviter de faire des plans et compter uniquement sur leur grande réactivité"+
" pour mener à bien leur tâche. Bien que le travail de groupe ne les rebute pas pour certaines activités,"+
" elles se sentent plus à l'aise lorsqu'elles peuvent se concentrer et travailler de manière individuelle."+
" Pour autant que leur cursus scolaire, leurs aptitudes, valeurs et intérêts y concourent en conjonction"+
" avec des opportunités adéquates, ces personnes s'orientent de préférence vers des professions qui leur"+
" offrent un large degré d'autonomie et de flexibilité en mettant à contribution leur facilité à résoudre les"+
" problèmes concrets, telles que technicien, mécanicien, charpentier, électronicien, entrepreneur ou"+
" ingénieur."+
" En résumé, ces personnes sont créatives, confiantes, originales, déterminées et impatientes d’obtenir"+
" des résultats immédiats si elles s’investissent à fond dans une tâche. Elles ne s'encombrent pas de règles"+
" qui pourraient les empêcher de faire les choses à leur manière et obtiennent ainsi souvent de bons"+
" résultats. Si elles cherchent à se développer, ces personnes gagneraient à faire l'effort de prendre en"+
" compte leurs sentiments profonds, évitant ainsi les explosions émotionnelles déplacées et permettant à"+
" leurs proches de les connaître mieux. Elles pourraient aussi prendre l'habitude de se fixer des objectifs"+
" plus clairs et éviter de toujours improviser afin de travailler de manière plus structurée. Elles tendraient"+
" alors à perdre moins de temps en essais et erreurs car elles profiteraient mieux des conseils de leur"+
" entourage."
};
