function generator$fantasy$medievals(type) {
	var nm1 = ["Admiral", "Alderman", "Archbishop", "Baron", "Baronet", "Bishop", "Cardinal", "Chancellor", "Count", "Duke", "Earl", "Emperor", "Grand Duke", "King", "King", "Knight", "Landgrave", "Lord", "Margrave", "Monk", "Peasant", "Prince", "Prince", "Prince Consort", "Reeve", "Serf", "Sir", "Squire", "Vicar", "Viscount", "Yeoman"];
	var nm2 = ["Aalart", "Aalot", "Abel", "Abelot", "Aberardus", "Acelin", "Acot", "Acur", "Adam", "Adame", "Adcock", "Addie", "Addy", "Ade", "Adecock", "Adeite", "Adekin", "Adelard", "Adelardus", "Ademar", "Adenot", "Adequin", "Aderlard", "Adhemar", "Adie", "Adinet", "Adkin", "Adlard", "Adri", "Aimeri", "Aimeriguet", "Aimery", "Aitken", "Alain", "Alainon", "Alan", "Alane", "Alanus", "Alard", "Alart", "Alcock", "Aldis", "Aldo", "Aldous", "Aldus", "Alein", "Aleyn", "Aleyne", "Alfan", "Alfonce", "Allan", "Allen", "Alleyn", "Almeric", "Almericus", "Alphonse", "Alphonsins", "Alphonsus", "Althalos", "Amaud", "Amauri", "Amaurri", "Amaury", "Amer", "Americ", "Americus", "Amery", "Amfrid", "Amfridus", "Ancel", "Ancelin", "Ancelm", "Ancelmus", "Ancelot", "Anchier", "Anderewe", "Andreas", "Andreu", "Andrew", "Andri", "Andriet", "Andrion", "Andriu", "Androu", "Androuet", "Andruche", "Andry", "Andryr", "Anfroi", "Anfroy", "Anscoul", "Anselet", "Ansell", "Ansellus", "Anselm", "Anselme", "Anselmet", "Anselmus", "Ansfrid", "Ansfroi", "Ansger", "Ansgot", "Ansiau", "Ansout", "Ansure", "Armand", "Armant", "Armin", "Armine", "Arminel", "Armundus", "Arnald", "Arnaldus", "Arnaud", "Arnaut", "Arnet", "Arnold", "Arnoldus", "Arnott", "Arnould", "Arter", "Arther", "Artheur", "Arthur", "Arthurius", "Arthurus", "Artor", "Artos", "Artur", "Arturus", "Artus", "Asce", "Ascelin", "Ascelyn", "Asher", "Asselin", "Athelard", "Athelardus", "Atkin", "Audemar", "Audouin", "Audri", "Audry", "Auguinare", "Aunger", "Aunsellus", "Aurri", "Ausout", "Averardus", "Averet", "Averitt", "Aylard", "Aymer", "Aymeri", "Aymon", "Azelinus", "Azemar", "Azer", "Azorius", "Azur", "Badcock", "Balan", "Balian", "Balin", "Barat", "Barda", "Bardol", "Bardolf", "Bardolph", "Bardolphus", "Bardulphus", "Baret", "Barnabas", "Barnabe", "Barnaby", "Barnard", "Barnet", "Barret", "Barrett", "Bart", "Bartel", "Bartelemi", "Bartelmeu", "Bartelot", "Bartholomeus", "Bartholomew", "Bartle", "Bartlet", "Bartly", "Bartolomeus", "Bartram", "Bartrem", "Barty", "Basequin", "Basewin", "Basuin", "Bat", "Batcock", "Batkin", "Batsuen", "Batty", "Bausan", "Bayard", "Baynard", "Beavis", "Belin", "Benedict", "Beneger", "Benger", "Berengar", "Berengarius", "Berenger", "Berengerius", "Berengerus", "Berengier", "Beri", "Beringer", "Berinon", "Bernar", "Bernard", "Bernardus", "Bernart", "Bernier", "Berold", "Beroldus", "Berolt", "Bert", "Bertaut", "Bertelemi", "Bertelemy", "Bertelot", "Berteram", "Berthellemy", "Bertie", "Bertin", "Bertol", "Bertram", "Bertramus", "Bertran", "Bertrand", "Bertrannus", "Bertrant", "Bertylmew", "Betan", "Betin", "Betyn", "Beuves", "Beves", "Bevis", "Blaive", "Blavier", "Blayves", "Bob", "Bobbie", "Bobby", "Bobs", "Borin", "Botolf", "Botolfe", "Botolph", "Botulf", "Brian", "Brianus", "Brice", "Bricet", "Briceus", "Bricot", "Brien", "Brienus", "Britius", "Brom", "Bruiant", "Bryan", "Bryant", "Bryce", "Carac", "Carle", "Cassius", "Cedric", "Challes", "Charle", "Charles", "Charlet", "Charlot", "Charlys", "Christian", "Christie", "Christofarus", "Christofle", "Christofre", "Christofur", "Christopher", "Christopherus", "Christouer", "Christy", "Clarembaut", "Clarenbald", "Clerebald", "Clerebold", "Clerenbald", "Clifton", "Col", "Colart", "Cole", "Colet", "Colin", "Colinet", "Colinus", "Collett", "Colley", "Colyne", "Conan", "Conandus", "Conanus", "Conayn", "Conon", "Conrad", "Conradin", "Courtois", "Crestiennet", "Cristal", "Cristall", "Cristoffle", "Cristoforus", "Cristofre", "Cristole", "Crystall", "Crysteffor", "Crystoll", "Curteis", "Curtis", "Dafydd", "Dain", "Dandi", "Dandy", "Dane", "Daniau", "Daniel", "Dannet", "Danyau", "Danyel", "Danyell", "Danyll", "Daue", "Dauid", "Dave", "Davi", "David", "Davie", "Davit", "Davy", "Daw", "Dawkin", "Dederic", "Dederick", "Dedericus", "Degarre", "Degore", "Derek", "Derric", "Derrick", "Deryk", "Destrian", "Diccon", "Dick", "Dicken", "Dickie", "Dickon", "Dickory", "Dicky", "Diggin", "Diggory", "Digory", "Dob", "Dobbin", "Dodd", "Dodge", "Donald", "Donaldus", "Doneuuald", "Doran", "Dowd", "Drake", "Drest", "Dreu", "Dreue", "Dreues", "Drew", "Drewett", "Droart", "Droet", "Drogo", "Drouet", "Droyn", "Dru", "Drue", "Druet", "Druettus", "Drugo", "Drust", "Drystan", "Dump", "Dumphey", "Dumphry", "Dumpty", "Dyryke", "Ebrardus", "Eden", "Edmund", "Edon", "Edun", "Elias", "Elies", "Eliot", "Elis", "Eluard", "Elyas", "Elye", "Elyes", "Elyot", "Elys", "Emaurri", "Emeric", "Emerick", "Emericus", "Emery", "Emory", "Engeram", "Engeramus", "Engerramet", "Engerran", "Engerrand", "Enguerran", "Enguerrand", "Enjorran", "Enjorren", "Erart", "Ernald", "Ernaldus", "Ernaut", "Erneis", "Ernis", "Ernest", "Ernisius", "Ernold", "Ernoldus", "Ernoul", "Ernoulet", "Ernoullet", "Esteve", "Estevenot", "Estevot", "Eude", "Eudes", "Eudo", "Eudon", "Euvrouin", "Evenon", "Everard", "Everardus", "Evrardin", "Evrart", "Evrat", "Evrouin", "Fairman", "Faramond", "Fareman", "Faremanne", "Farman", "Farmanus", "Farrimond", "Fauques", "Favian", "Fawkes", "Federic", "Federyc", "Fendrel", "Ferand", "Ferant", "Ferentus", "Ferrand", "Ferrant", "Ferri", "Ferry", "Fery", "Filbert", "Folc", "Folcard", "Folke", "Folkes", "Forthwind", "Foucaud", "Foucaut", "Foucher", "Fouchier", "Foulk", "Foulque", "Foulqueret", "Fouquaut", "Fouque", "Fouques", "Fouquet", "Fowke", "Francis", "Franco", "Francus", "Frank", "Franque", "Franquet", "Fraunk", "Frederic", "Frederick", "Fredericus", "Frery", "Frideric", "Fulbert", "Fulbertus", "Fulchard", "Fulcher", "Fulco", "Fulk", "Fulke", "Fulko", "Gabel", "Gabell", "Gabriel", "Gabrien", "Gabryell", "Gaiallard", "Gaillard", "Gaillart", "Gale", "Galeran", "Galeren", "Gales", "Galfridus", "Galien", "Gallien", "Galot", "Galter", "Galterius", "Garin", "Garit", "Garner", "Garnet", "Garnier", "Garnot", "Garnotin", "Garrat", "Garratt", "Garrett", "Gaufridus", "Gaufroi", "Gauteron", "Gautier", "Gautzelin", "Gauvain", "Gavienus", "Gavin", "Gavinus", "Gawain", "Gawayne", "Gawen", "Gawin", "Gawn", "Gawne", "Gawter", "Gawyn", "Gawyne", "Gaylord", "Geffery", "Geffrai", "Geffray", "Geffrei", "Geffrey", "Geffroi", "Gefroi", "Gefroy", "Gemmes", "Geoff", "Geoffrey", "Geoffroi", "Geofridus", "Ger", "Geraint", "Gerald", "Geraldus", "Gerard", "Gerardus", "Gerbald", "Gerbaut", "Gerbert", "Gerbertus", "Gerbod", "Gerbold", "Gerboud", "Gereminus", "Gerente", "Gerfast", "Gernier", "Geroldin", "Geroldus", "Gerolt", "Geronim", "Geronimus", "Gerontius", "Gerould", "Gerrart", "Geruntius", "Gervais", "Gervaise", "Gervas", "Gervase", "Gervasius", "Gervassius", "Gerves", "Gervese", "Gervesin", "Gervesot", "Gervis", "Geubert", "Geuffroi", "Geve", "Gib", "Gibbon", "Gibby", "Gieffrinnet", "Gifardus", "Gifartus", "Giff", "Giffard", "Gifford", "Gil", "Gilberd", "Gilbert", "Gilbertus", "Gilebert", "Gilebertus", "Gilebin", "Gilibertus", "Gill", "Gillebertus", "Gillet", "Gilliame", "Gillotin", "Gilmyn", "Gilow", "Gilpin", "Gipp", "Giradin", "Giraldus", "Girard", "Girardus", "Girart", "Giraud", "Giraudus", "Giraut", "Giroldus", "Girout", "Gislebertus", "Gobert", "Goce", "Gocelinus", "Godafre", "Godbert", "Godebert", "Godefray", "Godefridus", "Godefroi", "Godefroy", "Godefry", "Godelot", "Godet", "Godfery", "Godfree", "Godfreed", "Godfrey", "Godfry", "Goffridus", "Goin", "Goisfrid", "Goisfridus", "Goscelin", "Goscelinus", "Gosfridus", "Goubert", "Gozelinus", "Gregory", "Gualter", "Gualterius", "Gualtier", "Guarin", "Guarinet", "Guarinus", "Guarnier", "Guerart", "Guerin", "Guerinnet", "Guernier", "Guernon", "Guernot", "Gui", "Guiart", "Guibe", "Guibert", "Guibour", "Guido", "Guilhem", "Guilielm", "Guillame", "Guillaume", "Guille", "Guillelmus", "Guillemaque", "Guillemet", "Guillemin", "Guillemot", "Guillot", "Guillotin", "Guimar", "Guimart", "Guimer", "Guimond", "Guinemar", "Guiot", "Guiraud", "Guiraudet", "Guiscard", "Guischard", "Guntard", "Gunter", "Gunterius", "Guy", "Guyat", "Guymar", "Guyon", "Gwalter", "Gwatkin", "Gwychardus", "Gwydo", "Gy", "Gyffard", "Gylaw", "Gylbard", "Gylbarde", "Gylbart", "Gyrard", "Hab", "Hadrian", "Haganrich", "Haimmon", "Hal", "Ham", "Hamelen", "Hamelin", "Hameline", "Hamelot", "Hamen", "Hamett", "Hamlet", "Hamlin", "Hamlyn", "Hammond", "Hamnet", "Hamo", "Hamon", "Hamond", "Hamonet", "Hamund", "Han", "Hancock", "Hanecock", "Hanekin", "Hanequin", "Hank", "Hankin", "Hann", "Hanry", "Hardegin", "Hardi", "Harding", "Hardouin", "Harduinus", "Hardwin", "Harman", "Harry", "HarveyBreton", "Hary", "Haveron", "Hawkin", "Haymo", "Heimart", "Heimeri", "Heimon", "Helain", "Helias", "Helie", "Helies", "Helyas", "Helyes", "Helyot", "Hemarc", "Hemart", "Hemeri", "Hemmet", "Hemon", "Hemonnet", "Hendereye", "Hendry", "Henfrey", "Henricus", "Henriet", "Henriot", "Henry", "HenryHaimirich", "Heriot", "Herman", "Hermannus", "Hermenion", "Herment", "Hernais", "Hernays", "Herriot", "Herry", "Herve", "Herveus", "Hervey", "Hervi", "Herviet", "Hervoet", "Hervouet", "Hervy", "Heudebrand", "Hew", "Heward", "Hewe", "Hewelet", "Hewelin", "Hewerald", "Hewet", "Hewlett", "Heymeri", "Heymon", "Hick", "Hicket", "Hickie", "Higg", "Hildebrand", "Hildebrandus", "Hildebrant", "Hildebrondus", "Hitch", "Hitchcock", "Hob", "Hobard", "Hobb", "Hobbie", "Hodge", "Hodgkin", "Holger", "Honfroi", "Hotch", "Hotys", "Houdart", "Houdeet", "Houdin", "Houdoin", "Houdouyn", "How", "Howard", "Howkin", "Hubard", "Hubelet", "Hubert", "Hubertus", "Hubie", "Huchon", "Hud", "Hudd", "Hudde", "Hue", "Huelin", "Huet", "Huffie", "Hugelin", "Huget", "Hugethun", "Huggett", "Huggin", "Hugh", "Hughoc", "Hugin", "Hugline", "Hugo", "Hugolinus", "Hugon", "Huguard", "Hugubert", "Hugue", "Huguenin", "Hugues", "Huguet", "Huidemar", "Humfery", "Humfredus", "Humfrey", "Humfridus", "Humfrye", "Humph", "Humpherus", "Humphery", "Humphrey", "Humpty", "Hunfray", "Hunfridus", "Huon", "Hurrey", "Hutch", "Hutchin", "Iame", "Iames", "Iamys", "Iemes", "Ihon", "Ihone", "Ilberd", "Ilbert", "Ilbertus", "Imbart", "Imbert", "Imbertus", "Imgelramus", "Ingelram", "Ingelramnus", "Ingelrandus", "Ingelrannus", "Ingeram", "Ingerame", "Ingraham", "Ingram", "Ingramus", "Ingran", "Ingrannus", "Ioco", "Iohannes", "Iohn", "Iohne", "Iordanus", "Isaac", "Isac", "Isake", "Isambard", "Isembard", "Isembart", "Isemberd", "Isembert", "Isenbardus", "Ive", "Ives", "Ivo", "Ivon", "Ivone", "Ivote", "Izaak", "Jack", "Jacke", "Jackie", "Jacky", "Jacob", "Jacobus", "Jacominus", "Jacomus", "Jacomynus", "Jacquelin", "Jacquemin", "Jacques", "Jak", "Jake", "Jakke", "Jame", "James", "Jamettus", "Jamys", "Jan", "Janequin", "Jankin", "Janot", "Janshai", "Janyn", "Jaque", "Jaquemart", "Jaquemin", "Jaquemon", "Jaques", "Jaquet", "Jarin", "Jarvis", "Jasce", "Jaspar", "Jasper", "Jeacock", "Jeames", "Jeanin", "Jed", "Jeff", "Jeffcock", "Jeffery", "Jeffroy", "Jeffry", "Jehan", "Jehanel", "Jehannequin", "Jehannin", "Jehannot", "Jehanson", "Jehen", "Jem", "Jemmy", "Jenkin", "Jep", "Jeph", "Jeremiah", "Jeremias", "Jeremimum", "Jereminum", "Jeremy", "Jermyn", "Jerome", "Jeronim", "Jeronimus", "Jervis", "Jesper", "Jessop", "Jewell", "Joachim", "Joachin", "Job", "Jobba", "Joce", "Jocelin", "Jocelyn", "Jocet", "Joceus", "Jock", "Jodocus", "Joe", "Joel", "Joffridus", "Johannes", "John", "JohnCromwell", "Jon", "Jop", "Joppa", "Jordan", "Jordanus", "Josce", "Joscelin", "Joscelyn", "Josclyn", "Josef", "Josep", "Joseph", "Joses", "Joss", "Josse", "Josson", "Jourdain", "Jowell", "Joyce", "Judd", "Juel", "Juhel", "Jupp", "Jurdan", "Jurdanus", "Jurdi", "Karles", "Karolus", "Kester", "Kit", "Kitt", "Lambard", "Lambekin", "Lambelin", "Lambequin", "Lambert", "Lambertus", "Lambin", "Lambkin", "LanceLanzo", "Lancelet", "Lancelin", "Lancelot", "Lancelyn", "Lanslet", "Launce", "Launceletus", "Launcelot", "Launselot", "Leo", "Leofrick", "Letholdus", "Lewis", "Lief", "Ligart", "Ligier", "Lijart", "Lodewicus", "Looys", "Louis", "Louve", "Louvel", "Love", "Lovel", "Lovell", "Lovet", "Lowis", "Loys", "Loyset", "Ludovicus", "Mace", "Macey", "Mainard", "Mainardus", "Mainfridus", "Mainfroi", "Malcolinus", "Malcolm", "Malcolum", "Malculinus", "Malculms", "Malculmus", "Malgerius", "Manard", "Manfred", "Margre", "Marmaduc", "Marmaducus", "Marmaduke", "Marmedoke", "Maucolyn", "Mauger", "Maugier", "Maugre", "Maukolum", "Maynard", "Melcher", "Melchior", "Melmidoc", "Merek", "Mermadak", "Mial", "Micahel", "Michael", "Michel", "Michelet", "Michell", "Michiel", "Miel", "Mighel", "Mighell", "Mihel", "Mihill", "Mikael", "Mile", "Miles", "Milet", "Milo", "Milon", "Milot", "Moise", "Moses", "Moss", "Mosse", "Mosseus", "Mousse", "Moyse", "Moyses", "Myghchaell", "Myghell", "Myles", "Nab", "Neal", "Neale", "Neel", "Neil", "Nel", "Nele", "Nell", "Niall", "Nib", "Nichol", "Nicholas", "Nicholaus", "Nichole", "Nick", "Nicky", "Nicol", "Nicolas", "Nicolaus", "Nicolet", "Nicolin", "Niel", "Nigel", "Nigelle", "Nigellus", "Nigs", "Noah", "Nob", "Noe", "Noes", "Norman", "Normand", "Normann", "Normannus", "Noy", "Nycolas", "Nygell", "Odde", "Oddo", "Ode", "Odger", "Odibrand", "Odinel", "Odo", "Odouart", "Oenus", "Oger", "Ogerius", "Oggery", "Ogier", "Onfroi", "Onuphrius", "Otebon", "Otelin", "Otes", "Othes", "Otho", "Otis", "Otois", "Oton", "Ottie", "Otto", "Oudart", "Oudet", "Oudin", "Oudinet", "Oudinnet", "Ouein", "Ouen", "Ouin", "Oure", "Ourri", "Owain", "Owayne", "Owen", "Oweyn", "Owin", "Owine", "Owini", "Owun", "Owyne", "Parsefal", "Parzifal", "Paul", "Paule", "Paulin", "Paulinus", "Pawelinus", "Pawlin", "Peares", "Pearse", "Peirce", "Perceval", "Percevale", "Percheval", "Percival", "Percivale", "Percyvallus", "Percyvell", "Pereret", "Peres", "Perez", "Perinnet", "Perote", "Perrin", "Perrot", "Pers", "Persefall", "Persivell", "Peter", "Peterkin", "Petrus", "Petur", "Petyr", "Peyton", "Phareman", "Philbert", "Philibert", "Pierce", "Pierres", "Pierrot", "Piers", "Powel", "Powle", "Quinn", "Raaf", "Rab", "Rabbie", "Radolf", "Radulf", "Radulfus", "Rafe", "Raff", "Ragenald", "Raignald", "Raiimond", "Raimbaud", "Raimbaut", "Raimond", "Raimund", "Raimundus", "Rainald", "Rainaldus", "Rainard", "Rainerius", "Rainerus", "Rainier", "Ralf", "Ralphwolf", "Ran", "Ranald", "Rand", "Randal", "Randall", "Randle", "Randolph", "Randoul", "Randulfus", "Randull", "Randy", "Rankin", "Rannulf", "Rannulfus", "Ranulf", "Ranulfus", "Ranulph", "Ranulphus", "Raolet", "Raolin", "Raollet", "Raollin", "Raoul", "Raoulet", "Raoulin", "Rauf", "Rauffe", "Raulf", "Raullin", "Raulyn", "Rawkin", "Rawlin", "Raymond", "Raymundus", "Raynaldus", "Rayner", "Raynerus", "Raynoldus", "Reginald", "Reginalde", "Reginaldus", "Regnier", "Reignald", "Reignolde", "Reimfred", "Reimond", "Reimund", "Reinald", "Reinfred", "Reinfrid", "Reinfridus", "Reinhold", "Reinold", "Reinoldus", "Remfrey", "Remi", "Remon", "Remondin", "Remonnet", "Remont", "Remy", "Renard", "Renart", "Renaud", "Renaudin", "Renaut", "Renfred", "Renfry", "Renier", "Renodet", "Renoldus", "Renouart", "Renout", "Rex", "Reymnd", "Reynald", "Reynard", "Reynaud", "Reyner", "Reynfred", "Reynfrey", "Reynold", "Reynoldus", "Ricard", "Ricardus", "Ricaud", "Rich", "Richal", "Richard", "RichardRicher", "Richarde", "Richardin", "Richardus", "Richart", "Richemanus", "Richeut", "Richie", "Richier", "Rick", "Ricket", "Ricon", "Rique", "Riquebourc", "Riquier", "Rob", "Robard", "Robbie", "Rober", "Robert", "Robertus", "Robin", "Robinet", "Robion", "Robyn", "Rodbertus", "Roger", "Rogerin", "Rogerius", "Rogerus", "Roget", "Rogier", "Roguelin", "Roland", "Rolandus", "Rolant", "Roley", "Rolf", "Rolfe", "Rolft", "Rolland", "Rollant", "Rollin", "Rollo", "Rolph", "Ronald", "Rotbert", "Rotbertus", "Rotgerius", "Rouland", "Roulant", "Roule", "Roulf", "Rowan", "Rowland", "Rowley", "Rulf", "Rychard", "Rycharde", "Sadon", "Saer", "Saerus", "Sagar", "Sagard", "Sagarus", "Salaman", "Salamon", "Salemon", "Salmon", "Sam", "Samm", "Sampson", "Samson", "Sanse", "Sanses", "Sanson", "Sansonnet", "Sansum", "Saunsum", "Sayer", "Searl", "Searle", "Seemannus", "Segar", "Segarus", "Selle", "Selles", "Serell", "Seri", "Serill", "Serle", "Serlo", "Serlon", "Serrell", "Serrill", "Sewal", "Sewale", "Sewallus", "Sewell", "Sim", "Simcock", "Simkin", "Simmond", "Simon", "Simond", "Simonnet", "Simpkin", "Solomon", "Stefanus", "Sten", "Stephanus", "Stephen", "Steuan", "Steven", "Stevyn", "Sym", "Symkyn", "Symme", "Symon", "Symond", "Symonet", "Symonnet", "Symounde", "Taff", "Taffy", "Talbot", "Talebot", "Tam", "Tamas", "Tammie", "Tancard", "Tancock", "Tancred", "Tandy", "Tankard", "Tebald", "Tebaud", "Tebbe", "Tedbaldus", "Tedric", "Teebald", "Teodbald", "Teodric", "Tericius", "Terric", "Terrick", "Terricus", "Terrin", "Terrowin", "Terry", "Terryn", "Tetbald", "Thancred", "Thebaldus", "Theobald", "Theobaldus", "Theodoric", "Theodric", "Thibaud", "Thiebaut", "Thierri", "Thierry", "Thim", "Tholy", "Thom", "Thoma", "Thomas", "Thomasin", "Thomasinus", "Thomass", "Thomassin", "Thome", "Thomelin", "Thomlin", "Thomme", "Thoumas", "Thoumassin", "Thybaudin", "Thybaut", "Tib", "Tibald", "Tibaut", "Tibbott", "Tibost", "Tibout", "Tiebaut", "Tierri", "Tim", "Timm", "Tobey", "Tobias", "Tobin", "Toby", "Tobye", "Tobyn", "Tolly", "Toly", "Tom", "Tomas", "Tomkin", "Tommie", "Tommy", "Topaz", "Topher", "Tristan", "Tristian", "Triston", "Tristram", "Trustram", "Trystrem", "Tuyon", "Tybalt", "Tybaut", "Tybost", "Tybout", "Tyon", "Udo", "Udona", "Ulric", "Umfray", "Umfrey", "Umfridus", "Umphrey", "Uranius", "Urian", "Urianus", "Urien", "Uryene", "Uwen", "Valter", "Vasey", "Vauquelin", "Viliame", "Vilihame", "Villiame", "Vvillequin", "Walchelim", "Walchelin", "Walcher", "Walganus", "Walkelin", "Walkelinus", "Wally", "Walt", "Walter", "Walterius", "Walterus", "Warin", "Wariner", "Warinus", "Warner", "Warnerius", "Warnerus", "Warren", "Warrenus", "Wat", "Water", "Watkin", "Watkyn", "Watt", "Wattie", "Watty", "Wauter", "Wichard", "Wido", "Wilcock", "Wilecoc", "Wiliam", "Wiliame", "Wilkie", "Wilkin", "Will", "Willcock", "Willelm", "Willelmus", "Willet", "William", "Williame", "Willie", "Willmot", "Wilmot", "Wimarc", "Wimark", "Wiscar", "Wiscard", "Wischard", "Wisgarus", "Wy", "Wyat", "Wyliame", "Wylymot", "Wyman", "Wymar", "Wymarc", "Wymare", "Wymark", "Wymer", "Wymerus", "Wymon", "Wymond", "Wymund", "Wyon", "Wyschardus", "Xalvador", "Ymbert", "Yngerame", "Yon", "Ysaac", "Ysac", "Ysembert", "Yvain", "Yve", "Yves", "Yvet", "Yvon", "Yvone", "Yvonnet", "Yvonus", "Ywain", "Zane"];
	var nm3 = ["Lady", "Queen", "Duchess", "Countess", "Princess", "Lady in Waiting", "Maid", "Maiden", "Dame", "Empress", "Queen", "Princess ", "Princess Consort", "Grand Duchess ", "Duchess", "Margravine", "Countess", "Viscountess", "Baroness", "Baronetess", "Dame", "Reeve", "Squire", "Peasant", "Serf"];
	var nm4 = ["Evanlyn", "Astrida", "Aales", "Aalez", "Aalina", "Aaline", "Aalis", "Aaliz", "Aanor", "Acelina", "Ada", "Adaleide", "Ade", "Adela", "Adelaide", "Adelais", "Adelena", "Adelicia", "Adelie", "Adelin", "Adelina", "Adeline", "Adelisa", "Adeliz", "Adeliza", "Adelysia", "Adete", "Adhelina", "Aeleis", "Aelesia", "Aelienor", "Aelina", "Aelis", "Aelisia", "Aelizia", "Aenor", "Aeschine", "Afra", "Agnes", "Ahelis", "Ahelissa", "Ala", "Alais", "Albray", "Albreda", "Albree", "Aleida", "Aleneite", "Alesia", "Alesone", "Alexia", "Alia", "Alianor", "Alianora", "Alice", "Alicen", "Alicia", "Alienor", "Alienora", "Alina", "Aline", "Alis", "Alisceon", "Alise", "Alison", "Alisone", "Alisoun", "Aliss", "Aliz", "Allie", "Allison", "Alot", "Alote", "Alse", "Alson", "Alycie", "Alyna", "Alyon", "Alys", "Alyson", "Alysone", "Amalone", "Amelia", "Amelina", "Ameline", "Amelinne", "Amelot", "Amelyn", "Ammij", "Ammio", "Ammy", "Anachorita", "Anastas", "Anchoret", "Anchoretta", "Ancret", "Ancreta", "Ancrett", "Angaret", "Angmar", "Anilla", "Ankerita", "Ankharet", "Ann", "Anna", "Anne", "Annet", "Annie", "Annot", "Annote", "Anny", "Anot", "Anote", "Aphra", "Aphrah", "Arabella", "Ariana", "Arlette", "Ascelina", "Asceline", "Ascelinne", "Ascelot", "Ascilia", "Asselyna", "Atheena", "Athelesia", "Atheleys", "Athelina", "Athelis", "Athelisa", "Athelisia", "Athelyna", "Auberee", "Aubourc", "Aubreda", "Aubrey", "Auelin", "Auelina", "Auelyna", "Auic", "Auice", "Auicia", "Auisia", "Auizia", "Auphrey", "Auriol", "Aveis", "Avelina", "Aveline", "Avelot", "Avelyn", "Averil", "Avice", "Avicia", "Avila", "Avilina", "Avin", "Avina", "Avis", "Ayfara", "Ayleth", "Bayle", "Barsabe", "Bathia", "Bathsheba", "Bathshua", "Beatrice", "Beatrix", "Bela", "Bele", "Beleite", "Belet", "Bella", "Belle", "Belon", "Belot", "Belsant", "Belsante", "Berengaria", "Berengiere", "Bersaba", "Bess", "Besse", "Besseta", "Bessie", "Bessy", "Bet", "Beth", "Betha", "Bethan", "Bethia", "Betsy", "Betta", "Bette", "Betty", "Bibbey", "Bibby", "Bibel", "Bibele", "Bible", "Biby", "Biddy", "Bithiah", "Bragwayn", "Brangwayna", "Brangwine", "Branwyne", "Braya", "Bride", "Bridget", "Brigette", "Brigida", "Brigit", "Brigitta", "Brunhild", "Bryde", "Catherine", "Catrain", "Cecily", "Cedany", "Chrestienne", "Christaire", "Christian", "Christiana", "Christiania", "Christin", "Christina", "Claramunda", "Claremonde", "Clarimond", "Cleremunda", "Crestienne", "Crisly", "Crislye", "Cristan", "Cristeane", "Cristene", "Cristian", "Cristiana", "Cristiane", "Cristina", "Cristine", "Cristinia", "Cristy", "Crystina", "Dimia", "Duraina", "Ebbot", "Ebeta", "Ebett", "Ebota", "Edelin", "Edelina", "Edeline", "Edelinne", "Edolina", "Egelina", "Ela", "Eleanor", "Eleanora", "Elewisa", "Elewys", "Elezabeth", "Elia", "Elianor", "Elianora", "Elicia", "Elinor", "Elinora", "Elisa", "Elise", "Elison", "Elisot", "Elisota", "Eliza", "Elizabet", "Elizabeth", "Elizabetha", "Elizabethe", "Elizabetht", "Elizabez", "Elizey", "Elizibeth", "Elizibetht", "Ella", "Ellenor", "Ellice", "Ellyn", "Eloisa", "Eloise", "Elsa", "Elsie", "Elspat", "Elspet", "Eluned", "Elwisia", "Elyenora", "Elysabeth", "Elysande", "Elysant", "Elyscia", "Elyzabeth", "Ema", "Emayn", "Emblem", "Emblema", "Emblen", "Emblin", "Emblyn", "Emelenine", "Emelin", "Emelina", "Emeline", "Emelisse", "Emelnie", "Emelot", "Emelote", "Emeloth", "Emelyn", "Emelyne", "Emeny", "Emlin", "Emlyn", "Emm", "Emma", "Emme", "Emmelina", "Emmeline", "Emmet", "Emmete", "Emmony", "Emmot", "Emmota", "Emmote", "Emoni", "Emonie", "Emony", "Emota", "Emy", "Emylyna", "Enmeline", "Enndolynn", "Ermina", "Ermintrude", "Ermyntrude", "Esabel", "Esabell", "Eschina", "Esclairmonde", "Esclamonde", "Esobel", "Essylt", "Eua", "Eudeline", "Euot", "Euota", "Eva", "Eve", "Evelina", "Evelot", "Evelune", "Evelyn", "Evette", "Evota", "Ewe", "Ezabell", "Farfelee", "Gabella", "Gabriel", "Gabriela", "Gaenor", "Galiena", "Galiene", "Galienne", "Ganleya", "Ganor", "Gaunlaya", "Gaunliena", "Gaynore", "Gele", "Gelen", "Gelleia", "Genevieve", "Genevote", "Gennat", "Gennevote", "Gennon", "Geua", "Geue", "Geuecok", "Geva", "Gisella", "Giselle", "Gisellee", "Gisla", "Gismon", "Gloriana", "Godiva", "Gonore", "Gresilda", "Grisel", "Griselda", "Griseldis", "Grishild", "Grissall", "Grissel", "Grissell", "Grizel", "Grizzel", "Guanor", "Gueanor", "Guener", "Guenevere", "Guibourc", "Guillemete", "Guillote", "Guinevere", "Guiote", "Gunneuare", "Gussalen", "Gwendolynn", "Gwenhevare", "Gwenore", "Gynuara", "Hadwis", "Hadwisa", "Hadwise", "Haouys", "Haoys", "Harsent", "Haueis", "Havisa", "Hawis", "Hawisa", "Hawise", "Hawisia", "Hawys", "Hawyse", "Hegelina", "Heilewis", "Heilewisa", "Hele", "Heleanor", "Helena", "Helevisa", "Helewis", "Helewisa", "Helewise", "Helewys", "Helewyse", "Helisende", "Helisent", "Helissent", "Heloise", "Helouys", "Heloys", "Heloyson", "Helueua", "Helysoune", "Helyssent", "Hemin", "Herleva", "Herleve", "Hermesent", "Hermessent", "Hermineite", "Hersent", "Hibbot", "Hildegard", "Hismena", "Hosanna", "Hosannah", "Hosianna", "Hugolina", "Hugolinae", "Huguete", "Husewyf", "Husewyua", "Hysode", "Hyssmaye", "Ibbe", "Ibbet", "Ibbot", "Ibbota", "Ibot", "Ibota", "Ida", "Idemay", "Imagantia", "Imaigne", "Imania", "Imanie", "Imayn", "Imayne", "Imblen", "Imeyna", "Imme", "Immine", "Imyne", "Ingaret", "Ingaretta", "Ioetta", "Iohane", "Iohanna", "Ione", "Isa", "Isabeau", "Isabel", "Isabele", "Isabell", "Isabella", "Isabelle", "Isabelot", "Isamaya", "Isard", "Isata", "Isaut", "Iseldis", "Iselota", "Isemay", "Isemeine", "Iseuda", "Iseult", "Iseut", "Ishbel", "Ismania", "Ismanna", "Ismay", "Ismeina", "Ismena", "Ismenia", "Ismey", "Isobel", "Isobella", "Isold", "Isolda", "Isolde", "Isolt", "Isopel", "Isot", "Isota", "Isott", "Isotta", "Isouda", "Issabell", "Issabella", "Issat", "Issobell", "Issobella", "Isylte", "Ivetta", "Ivette", "Izett", "Izot", "Jacket", "Jacklin", "Jaclyn", "Jacoba", "Jacobina", "Jacqueline", "Jacquelle", "Jacquelyn", "Jacquetta", "Jahan", "Jakelina", "Jakemina", "Jaketta", "Jakolina", "James", "Jana", "Janat", "Jane", "Janet", "Janeta", "Jannet", "Jaquelinne", "Jaquelot", "Jasmine", "Jean", "Jeane", "Jeanette", "Jeanna", "Jeanne", "Jeene", "Jehane", "Jehanne", "Jehannete", "Jehannette", "Jehannote", "Jehenne", "Jenefer", "Jenet", "Jeneuer", "Jennet", "Jenny", "Jesmaine", "Jesmond", "Jessimond", "Jhone", "Jimme", "Jinny", "Jismond", "Jivete", "Joan", "Joane", "Joanette", "Joanna", "Jocea", "Jocey", "Jocosa", "Jodoca", "Joetta", "Johamma", "Johan", "Johana", "Johanna", "Johna", "Johne", "Johnnett", "Jone", "Jonet", "Joneta", "Jonetam", "Jonete", "Jonett", "Jonette", "Josse", "Josselyn", "Jossy", "Joyce", "Joyse", "Juicea", "Juliana", "Jyne", "Katelyn", "Katrina", "Kaylein", "Krea", "Kristyan", "Kyrstyan", "Libbe", "Libby", "Libet", "Lilian", "Lilias", "Lilion", "Lilla", "Lillian", "Lillias", "Lily", "Lina", "Linet", "Linette", "Linnet", "Linniue", "Linota", "Linyeve", "Linyive", "Lisa", "Liza", "Lizbeth", "Lizzie", "Loreena", "Luanda", "Luned", "Lunet", "Lunete", "Lylie", "Lynette", "Lyneue", "Lyonnete", "Maaline", "Maalot", "Macie", "Mactilda", "Mactildis", "Madallaine", "Madeleine", "Madelina", "Madlen", "Madlin", "Madlyn", "Maerwynn", "Magdalen", "Magdalene", "Magdalin", "Magdelne", "Maghenyld", "Maghtild", "Mahald", "Mahalt", "Mahaud", "Mahault", "Mahaut", "Mahenyld", "Maheut", "Mahhild", "Maleta", "Malie", "Malina", "Maline", "Malkin", "Malkyn", "Mall", "Malle", "Malleta", "Mallkin", "Mallot", "Mally", "Malot", "Malota", "Malt", "Maly", "Malyn", "Malyna", "Manel", "Maneld", "Manild", "Mare", "Marekyn", "Mareona", "Mareoun", "Margaret", "Margery", "Maria", "Marian", "Mariana", "Mariel", "Marina", "Marion", "Marione", "Mariora", "Mariorie", "Mariot", "Mariota", "Mariote", "Marioth", "Marioun", "Marioziota", "Mariun", "Marote", "Mary", "Maryell", "Masota", "Masse", "Mathe", "Matheld", "Mathila", "Mathild", "Mathildis", "Matild", "Matilda", "Matilde", "Matildis", "Matill", "Matilldis", "Matillis", "Mattie", "Matty", "Maud", "Maude", "Maudeleyn", "Maudelyn", "Maudlin", "Maughtild", "Mauld", "Maut", "Mautild", "Mawd", "Mawde", "Mawdelyn", "Mawt", "May", "Maynild", "Maysant", "Maysaunt", "Mechtild", "Mehenilda", "Meisent", "Melicent", "Melisant", "Melisenda", "Melisent", "Melisentia", "Melissent", "Meraud", "Merewen", "Merewina", "Merhild", "Meriall", "Meriel", "Merilda", "Merione", "Merwenna", "Meryall", "Meryld", "Merzone", "Metylda", "Milcentia", "Milesent", "Milessent", "Milicent", "Milicenta", "Milisandia", "Milisant", "Milisendis", "Milisent", "Milla", "Mille", "Millesant", "Millesenta", "Millicent", "Minnie", "Mirabelle", "Miriald", "Miriel", "Miriela", "Mirield", "Mirielda", "Mirielis", "Miriella", "Miriild", "Mirils", "Missa", "Mohaut", "Mold", "Molde", "Moll", "Molle", "Mollie", "Molly", "Molt", "Moolde", "Mott", "Motte", "Moude", "Moulde", "Moysant", "Moysent", "Murie", "Muriel", "Muriele", "Muriella", "Murienne", "Mylecent", "Mylisant", "Mylla", "Mylle", "Nan", "Nance", "Nancy", "Nanette", "Nanny", "Nanss", "Nibb", "Nina", "Ninette", "Ninon", "Nota", "Notekyn", "Odelina", "Odolina", "Orella", "Oriel", "Oriholt", "Oriold", "Oriolda", "Oriolt", "Osane", "Osanna", "Osanne", "Osenne", "Ossenna", "Ozanne", "Peronell", "Phrowenia", "Poll", "Pollekin", "Polly", "Rainydayas", "Rechemay", "Richarda", "Richardyne", "Richemaya", "Richemeya", "Richenda", "Richenza", "Richessa", "Richil", "Richild", "Richildis", "Richill", "Richmal", "Richoard", "Richolda", "Ricolda", "Rikild", "Rikilda", "Rikilde", "Rikmai", "Rochilda", "Roes", "Roese", "Roesia", "Roheis", "Roheisa", "Roheisia", "Rohese", "Rohesia", "Rohez", "Roisia", "Rokilda", "Roos", "Rosa", "Rosalind", "Rosalinda", "Rosaline", "Rosamond", "Rosamund", "Rosamunda", "Rose", "Roseaman", "Roseia", "Rosemond", "Rosemunda", "Rosomon", "Rossamond", "Rothais", "Royce", "Roysa", "Royse", "Roysia", "Rozeman", "Rychyld", "Ryia", "Rykeld", "Sabelina", "Sabeline", "Sadie", "Sairey", "Sal", "Sallie", "Sally", "Saloua", "Salove", "Sapphira", "Sapphire", "Sara", "Sarah", "Sarey", "Sari", "Sarra", "Sarre", "Sefare", "Sela", "Seloua", "Seloue", "Selova", "Seluue", "Sely", "Sephare", "Seraphina", "Shusan", "Shusanna", "Simmonete", "Simona", "Simone", "Sosanna", "Sueta", "Sueteluue", "Sukie", "Suky", "Sulley", "Sully", "Susan", "Susane", "Susanna", "Susannah", "Susanney", "Sweteloue", "Swetelove", "Swethyna", "Swetiue", "Swetyene", "Swetyne", "Sybbyl", "Symonne", "Tamasine", "Tamsin", "Tatsy", "Tatty", "Teffan", "Teffania", "Teffany", "Tephania", "Tephna", "Tetty", "Thamasin", "Thea", "Theffania", "Theffanie", "Theofania", "Theophania", "Thiphania", "Thomas", "Thomasia", "Thomasin", "Thomasina", "Thomasine", "Thomasse", "Thomassete", "Thomeson", "Thyphainne", "Tibb", "Tibby", "Tibota", "Tifaine", "Tiffan", "Tiffania", "Tiffany", "Tiffonia", "Tilda", "Till", "Tilla", "Tille", "Tillie", "Tillot", "Tillota", "Tillote", "Tilly", "Tiphina", "Tomson", "Tyfainne", "Tyffany", "Tyffayne", "Typhainne", "Typheinne", "Typhenete", "Typhenon", "Vanora", "Victoria", "Wander", "Wannore", "Wannour", "Wantelien", "Wantliana", "Wenefreda", "Wenthelen", "Wentiliana", "Williamina", "Wilmetta", "Wilmot", "Winefred", "Winifred", "Winnifred", "Wynifreed", "Xristiana", "Ybelote", "Ybot", "Yda", "Ymanie", "Ymanya", "Ymanye", "Ymeisna", "Ymenia", "Ysabel", "Ysabell", "Ysabella", "Ysabelle", "Ysabelon", "Ysabelot", "Ysabiau", "Ysemay", "Yseult", "Yseulte", "Ysmay", "Ysmeina", "Ysmena", "Ysmene", "Ysolt", "Ysoude", "Ysout", "Yvette", "Yvonne"];


	i = Math.floor(Math.random() * 10); {
		if (type === 1) {
			rnd = Math.floor(Math.random() * nm3.length);
			rnd2 = Math.floor(Math.random() * nm4.length);
			names = nm3[rnd] + " " + nm4[rnd2];
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			names = nm1[rnd] + " " + nm2[rnd2];
		}
		return names;
	}

}