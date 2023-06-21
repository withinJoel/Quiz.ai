let questions = [
	///////////////////////////////////////////////////////////Random Questions
	{
		question: "🌏 What is the capital of Australia?",
		answer: "🏙️ Canberra",
		options: [
			"🌉 Sydney",
			"🌃 Melbourne",
			"🏙️ Perth",
			"🏙️ Canberra"
		]
	},
	{
		question: "What is the full name of the founder of the Tata family business?",
		answer: "Jamsetji Nusserwanji Tata",
		options: [
		  "Jamshedji Ratanji Tata",
		  "Ratan Naval Tata",
		  "Jamsetji Nusserwanji Tata",
		  "Ratan Jamshed Tata"
		]
	  },
	  {
		question: "What is the official name of the Swedish Parliament?",
		options: ["Folketinget", "Riksdag", "Althing", "Storting"],
		answer: "Riksdag"
	  },
	  {
		question: "Which system of government does Sweden have?",
		options: ["Presidential system", "Parliamentary system", "Federal system", "Monarchical system"],
		answer: "Parliamentary system"
	  },
	  {
		question: "Which Tata family member established the Tata Institute of Fundamental Research (TIFR)?",
		options: ["Dorabji Tata", "Ratan Tata", "Jamsetji Tata", "J.R.D. Tata"],
		answer: "Dorabji Tata"
	  },
	  {
		question: "How many branches of government are there in the United States?",
		options: ["2", "3", "4", "5"],
		answer: "3"
	  },
	  {
		question: "What is the maximum number of terms a President can serve?",
		options: ["1", "2", "3", "4"],
		answer: "2"
	  },	  
	{
		question: "What is the hormone that is associated with love and bonding?",
		answer: "💕 Oxytocin",
		options: ["💤 Melatonin", "💕 Oxytocin", "🧠 Dopamine", "🚀 Adrenaline"]
	},
	{
		question: "What is the phenomenon where people are attracted to others with similar characteristics known as?",
		answer: "👥 Assortative mating",
		options: ["💞 Love at first sight", "👥 Assortative mating", "💔 Breakup", "🎉 Celebration"]
	},
	{
		question: "What is the name for the chemical that is produced by the brain and is associated with pleasure and reward?",
		answer: "🧠 Dopamine",
		options: ["🧬 DNA", "💪 Protein", "🧠 Dopamine", "🌰 Serotonin"]
	},
	{
		question: "What is the process of two atomic nuclei coming together to form a heavier nucleus called?",
		answer: "💘 Fusion",
		options: ["💔 Fission", "💘 Fusion", "🌪️ Tornado", "🌊 Erosion"]
	},
	{
		question: "What is the term for the physical and emotional attraction to someone of the same sex?",
		answer: "🏳️‍🌈 Homosexuality",
		options: ["🚻 Gender identity", "🔍 Sexual orientation", "🏳️‍🌈 Homosexuality", "👨‍❤️‍👨 Bromance"]
	},
	{
		question: "What was the name of William Shakespeare's wife?",
		answer: "👰 Anne Hathaway",
		options: ["👰 Mary Arden", "👰 Jane Austen", "👰 Elizabeth Barrett Browning", "👰 Anne Hathaway"]
	},
	{
		question: "What was the name of the acting company that William Shakespeare was a member of?",
		answer: "🎭 The Lord Chamberlain's Men",
		options: ["🎭 The King's Men", "🎭 The Globe Players", "🎭 The Royal Shakespeare Company", "🎭 The Lord Chamberlain's Men"]
	},
	{
		question: "What is the name of the hormone that is associated with the fight-or-flight response?",
		answer: "🚀 Adrenaline",
		options: ["🎉 Serotonin", "🏥 Insulin", "🚀 Adrenaline", "💊 Opioid"]
	},

	{
		question: "What is the highest rank in the US Army?",
		answer: "🎖️ General of the Army",
		options: ["🎖️ General of the Army", "🎖️ Sergeant Major", "🎖️ Lieutenant Colonel", "🎖️ Major General"]
	},
	{
		question: "What is the term for a group of soldiers who march or drill together?",
		answer: "🏃‍♂️ Squad",
		options: ["🚀 Platoon", "🏃‍♂️ Squad", "🚁 Company", "🐴 Cavalry"]
	},
	{
		question: "What is the term for a soldier who has been given a dishonorable discharge?",
		answer: "🙅‍♂️ Disgraced",
		options: ["🏆 Decorated", "🤵‍♂️ Distinguished", "🙅‍♂️ Disgraced", "👨‍✈️ Commissioned"],
	},
	{
		question: "What is the term for a soldier who is responsible for the care of horses?",
		answer: "🐎 Farrier",
		options: ["🔫 Sharpshooter", "🐎 Farrier", "🚒 Firefighter", "👨‍✈️ Pilot"],
	},
	{
		question: "What is the term for a soldier who has completed basic training but has not yet been assigned to a unit?",
		answer: "🎓 Trainee",
		options: ["🧑‍✈️ Cadet", "🎓 Trainee", "👮‍♂️ Recruit", "🤵‍♂️ Officer Candidate"],
	},
	{
		question: "What is the name of the US Army's special operations unit?",
		answer: "🔪 Delta Force",
		options: ["🌊 Navy SEALs", "🔪 Delta Force", "🐴 Green Berets", "🛩️ Airborne Rangers"],
	},
	{
		question: "What is the term for a soldier who is trained to provide medical care?",
		answer: "🚑 Medic",
		options: ["👨‍✈️ Pilot", "🧑‍🚀 Astronaut", "🚑 Medic", "🔍 Investigator"],
	},
	{
		question: "What is the term for a soldier who is responsible for the maintenance and repair of weapons?",
		answer: "🔧 Armorer",
		options: ["🚛 Driver", "🔧 Armorer", "📈 Analyst", "👨‍💼 Administrator"],
	},
	{
		question: "What is the term for a soldier who is responsible for the transportation of troops and equipment?",
		answer: "🚚 Transporter",
		options: ["🚂 Conductor", "🚚 Transporter", "🚁 Helicopter Pilot", "🛳️ Sailor"],
	},
	{
		question: "What is the term for a soldier who is responsible for gathering intelligence?",
		answer: "🕵️‍♂️ Intelligence Officer",
		options: ["📡 Radar Operator", "🕵️‍♂️ Intelligence Officer", "🎯 Target Acquisition Specialist", "🔫 Sniper"],
	},
	{
		question: "What does PES stand for in physics?",
		answer: "🔬 Photoelectron Spectroscopy",
		options: ["🔬 Photon Electron Synthesis", "🔬 Photoelectric Synapse", "🔬 Particle Energy Spectrum", "🔬 Photoelectron Spectroscopy"]
	},
	{
		question: "What is the principle behind PES?",
		answer: "🔬 The energy of a photon is absorbed by an atom or molecule, which releases an electron.",
		options: ["🔬 The energy of a photon is reflected by an atom or molecule, which releases an electron.", "🔬 The energy of a photon is absorbed by an atom or molecule, which releases a proton.", "🔬 The energy of a photon is absorbed by an atom or molecule, which releases a neutron.", "🔬 The energy of a photon is absorbed by an atom or molecule, which releases an electron."]
	},
	{
		question: "What type of information can be obtained through PES?",
		answer: "🔬 The electronic structure of a material, including the number of valence electrons and their binding energies.",
		options: ["🔬 The chemical formula of a material and its crystal structure.", "🔬 The temperature at which a material undergoes phase transition.", "🔬 The physical properties of a material such as density, color, and melting point.", "🔬 The electronic structure of a material, including the number of valence electrons and their binding energies."]
	},
	{
		question: "What type of energy source is typically used in PES experiments?",
		answer: "🔬 Synchrotron radiation.",
		options: ["🔬 Fossil fuels.", "🔬 Nuclear power.", "🔬 Solar energy.", "🔬 Synchrotron radiation."]
	},
	{
		question: "What is the name of the Nobel Prize-winning technique that uses PES?",
		answer: "🔬 X-ray Photoelectron Spectroscopy (XPS)",
		options: ["🔬 Nuclear Magnetic Resonance (NMR)", "🔬 Mass Spectrometry (MS)", "🔬 Infrared Spectroscopy (IR)", "🔬 X-ray Photoelectron Spectroscopy (XPS)"]
	},
	{
		question: "What is the advantage of using synchrotron radiation over other energy sources for PES?",
		answer: "🔬 Synchrotron radiation provides a higher intensity of photons, allowing for higher-resolution data and faster data acquisition.",
		options: ["🔬 Synchrotron radiation is cheaper and more widely available than other energy sources.", "🔬 Synchrotron radiation produces less radiation than other energy sources, making it safer for researchers.", "🔬 Synchrotron radiation can be easily focused on a specific sample, resulting in a more precise measurement.", "🔬 Synchrotron radiation provides a higher intensity of photons, allowing for higher-resolution data and faster data acquisition."]
	},
	{
		question: "Which astrological sign is represented by the ram?",
		answer: "♈ Aries",
		options: ["♈ Aries", "♓ Pisces", "♑ Capricorn", "♋ Cancer"]
	},
	{
		question: "Which astrological sign is represented by the bull?",
		answer: "♉ Taurus",
		options: ["♊ Gemini", "♉ Taurus", "♎ Libra", "♐ Sagittarius"]
	},
	{
		question: "Which astrological sign is represented by the twins?",
		answer: "♊ Gemini",
		options: ["♌ Leo", "♏ Scorpio", "♊ Gemini", "♒ Aquarius"]
	},
	{
		question: "Which astrological sign is represented by the crab?",
		answer: "♋ Cancer",
		options: ["♉ Taurus", "♋ Cancer", "♑ Capricorn", "♐ Sagittarius"]
	},
	{
		question: "Which astrological sign is represented by the lion?",
		answer: "♌ Leo",
		options: ["♍ Virgo", "♌ Leo", "♒ Aquarius", "♏ Scorpio"]
	},
	{
		question: "Which astrological sign is represented by the scales?",
		answer: "♎ Libra",
		options: ["♎ Libra", "♓ Pisces", "♏ Scorpio", "♐ Sagittarius"]
	},
	{
		question: "Which astrological sign is represented by the scorpion?",
		answer: "♏ Scorpio",
		options: ["♉ Taurus", "♍ Virgo", "♏ Scorpio", "♑ Capricorn"]
	},
	{
		question: "Which astrological sign is represented by the archer?",
		answer: "♐ Sagittarius",
		options: ["♌ Leo", "♒ Aquarius", "♐ Sagittarius", "♊ Gemini"]
	},
	{
		question: "Which astrological sign is represented by the goat?",
		answer: "♑ Capricorn",
		options: ["♋ Cancer", "♏ Scorpio", "♑ Capricorn", "♎ Libra"]
	},
	{
		question: "Which astrological sign is represented by the water bearer?",
		answer: "♒ Aquarius",
		options: ["♓ Pisces", "♒ Aquarius", "♎ Libra", "♊ Gemini"]
	},
	{
		question: "Which astrological sign is represented by the fish?",
		answer: "♓ Pisces",
		options: ["♈ Aries", "♓ Pisces", "♐ Sagittarius", "♌ Leo"]
	},
	{
		question: "What was the name of William Shakespeare's wife?",
		answer: "👰 Anne Hathaway",
		options: ["👩‍🎓 Margaret Hughes", "🎭 Sarah Siddons", "👰 Anne Hathaway", "📜 Emilia Lanier"]
	},
	{
		question: "What is the name of the play that features the famous line 'to be or not to be'?",
		answer: "🎭 Hamlet",
		options: ["🎭 Hamlet", "🗡️ Macbeth", "🎓 Julius Caesar", "🎭 Romeo and Juliet"]
	},
	{
		question: "What is the name of the theater company that Shakespeare was associated with?",
		answer: "🎭 Lord Chamberlain's Men",
		options: ["🎭 The King's Men", "🎭 Lord Chamberlain's Men", "🎭 The Globe Players", "🎭 The Royal Shakespeare Company"]
	},
	{
		question: "What was the name of Shakespeare's only son?",
		answer: "👦 Hamnet",
		options: ["👦 Hamlet", "👦 Horatio", "👦 Hector", "👦 Hamnet"]
	},
	{
		question: "What was the name of the first published collection of Shakespeare's plays?",
		answer: "📚 First Folio",
		options: ["📚 Second Quarto", "📚 Third Folio", "📚 Fourth Quarto", "📚 First Folio"]
	},
	{
		question: "What is the name of the romantic comedy in which the character Viola disguises herself as a man?",
		answer: "👩‍✈️ Twelfth Night",
		options: ["🎭 A Midsummer Night's Dream", "👑 The Tempest", "👩‍✈️ Twelfth Night", "🗡️ The Two Gentlemen of Verona"]
	},
	{
		question: "What is the name of the tragedy in which the title character murders the Scottish king?",
		answer: "🗡️ Macbeth",
		options: ["🗡️ Macbeth", "🎭 Hamlet", "🎓 Othello", "🎭 Romeo and Juliet"]
	},
	{
		question: "What is the name of the play that features the famous balcony scene?",
		answer: "🎭 Romeo and Juliet",
		options: ["🎓 Julius Caesar", "🎭 Hamlet", "🎭 Romeo and Juliet", "🗡️ Macbeth"]
	},
	{
		question: "What is the name of the play that features the character of Shylock, a Jewish moneylender?",
		answer: "🎭 The Merchant of Venice",
		options: ["👑 King Lear", "👑 Richard III", "🎭 The Merchant of Venice", "👑 Henry V"]
	},
	{
		question: "What is the name of the play that features the character of Lady Macbeth?",
		answer: "🗡️ Macbeth",
		options: ["🎭 Romeo and Juliet", "🎓 Othello", "🗡️ Macbeth", "🎭 A Midsummer Night's Dream"]
	},
	{
		question: "What was the name of the theater where many of Shakespeare's plays were performed?",
		answer: "🎭 The Globe Theatre",
		options: ["🎭 The Globe Theatre", "🎨 The Louvre Museum", "🎥 The Hollywood Bowl", "🎤 Carnegie Hall"]
	},
	{
		question: "What was the title of Shakespeare's first published collection of plays?",
		answer: "📜 The First Folio",
		options: ["📜 The First Folio", "📘 Harry Potter and the Philosopher's Stone", "📙 The Catcher in the Rye", "📕 To Kill a Mockingbird"]
	},
	{
		question: "What is the title of Shakespeare's longest play?",
		answer: "🤴🏻 Hamlet",
		options: ["🔥 Macbeth", "👑 King Lear", "🤴🏻 Hamlet", "🐍 Othello"]
	},
	{
		question: "What was the name of the queen who was on the throne during much of Shakespeare's career?",
		answer: "👑 Queen Elizabeth I",
		options: ["👸🏻 Queen Victoria", "👑 Queen Elizabeth I", "👑 Queen Elizabeth II", "👸🏼 Queen Anne"]
	},
	{
		question: "What was the name of Shakespeare's wife?",
		answer: "💍 Anne Hathaway",
		options: ["💐 Elizabeth Barrett Browning", "🌷 Jane Austen", "💍 Anne Hathaway", "📚 Virginia Woolf"]
	},
	{
		question: "What is the name of the character in Shakespeare's play 'The Merchant of Venice' who demands a pound of flesh from the protagonist?",
		answer: "⚖️ Shylock",
		options: ["🗡️ Romeo", "🕰️ Macbeth", "⚖️ Shylock", "👸🏻 Lady Macbeth"]
	},
	{
		question: "What is the name of the character in Shakespeare's play 'Romeo and Juliet' who serves as Romeo's confidant and friend?",
		answer: "🗡️ Mercutio",
		options: ["🌹 Juliet", "🎭 Tybalt", "🗡️ Mercutio", "🎻 Friar Laurence"]
	},
	{
		question: "What is the name of the character in Shakespeare's play 'Macbeth' who manipulates Macbeth into murdering King Duncan?",
		answer: "👸🏻 Lady Macbeth",
		options: ["🧙🏼‍♀️ The Three Witches", "🔨 Macduff", "🗡️ Banquo", "👸🏻 Lady Macbeth"]
	},
	{
		question: "What is the name of the character in Shakespeare's play 'Othello' who is manipulated into believing his wife has been unfaithful?",
		answer: "🎭 Othello",
		options: ["🎻 Desdemona", "🧐 Iago", "👥 Roderigo", "🎭 Othello"]
	},
	{
		question: "What is the process by which a male and female come together to produce offspring?",
		answer: "👶 Reproduction",
		options: ["🍔 Digestion", "🚪 Egress", "👶 Reproduction", "💤 Sleep"]
	},
	{
		question: "What was the name of the collection of Shakespeare's plays that was published in 1623?",
		answer: "📜 The First Folio",
		options: ["📜 The Second Folio", "📜 The Complete Works of Shakespeare", "📜 The First Folio", "📜 The Quarto Editions"]
	},
	{
		question: "What is the name of the historical play series written by Shakespeare?",
		answer: "👑 The Henry VI trilogy and the Richard III",
		options: ["👑 The War of the Roses", "👑 The Tudor Dynasty", "👑 The Henry VI trilogy and the Richard III", "👑 The Julius Caesar trilogy"]
	},
	{
		question: "What is the title of Shakespeare's comedy play about a pair of separated twins?",
		answer: "👬 Twelfth Night",
		options: ["🎭 A Midsummer Night's Dream", "🧜‍♀️ The Tempest", "👬 Twelfth Night", "🎩 The Taming of the Shrew"]
	},
	{
		question: "What is the title of Shakespeare's play that tells the story of a Scottish general who becomes consumed by ambition?",
		answer: "🗡️ Macbeth",
		options: ["🗡️ Macbeth", "👑 Henry V", "🏺 Antony and Cleopatra", "🏰 King Lear"]
	},
	{
		question: "What is the scientific term for the study of how genes influence behavior?",
		answer: "🧬 Behavioral genetics",
		options: ["📚 Psychology", "👥 Sociology", "🧬 Behavioral genetics", "🌱 Botany"]
	},
	{
		question: "What is the chemical responsible for the feeling of love and happiness?",
		answer: "💕 Dopamine",
		options: ["💊 Penicillin", "💉 Insulin", "💕 Dopamine", "🧪 Lithium"]
	},
	{
		question: "In what year was William Shakespeare born?",
		answer: "🎭 1564",
		options: ["🎭 1578", "🎭 1601", "🎭 1564", "🎭 1589"]
	},
	{
		question: "What is the name of the theater company Shakespeare worked for?",
		answer: "🎬 Lord Chamberlain's Men",
		options: ["🎭 King's Men", "🎬 Lord Chamberlain's Men", "🎭 Queen's Men", "🎬 Shakespearean Troupe"],
	},
	{
		question: "In which city did Shakespeare spend most of his career?",
		answer: "🏙️ London",
		options: ["🏰 Edinburgh", "🌉 New York", "🏙️ London", "🏞️ Stratford-upon-Avon"],
	},
	{
		question: "What is the title of Shakespeare's longest play?",
		answer: "👑 Hamlet",
		options: ["🔥 Macbeth", "👑 Hamlet", "🏰 Othello", "🎭 Romeo and Juliet"],
	},
	{
		question: "What is the name of the theater where many of Shakespeare's plays were first performed?",
		answer: "🎭 The Globe Theatre",
		options: ["🎭 The Royal Shakespeare Theatre", "🎭 The Globe Theatre", "🎭 The Apollo Theatre", "🎭 The National Theatre"],
	},
	{
		question: "What is the name of Shakespeare's wife?",
		answer: "👰 Anne Hathaway",
		options: ["👰 Anne Boleyn", "👰 Anne Hathaway", "👰 Mary Arden", "👰 Elizabeth Tudor"],
	},
	{
		question: "What is the name of the book that was published in 1623 containing most of Shakespeare's plays?",
		answer: "📖 First Folio",
		options: ["📜 The King's Men", "📖 First Folio", "📜 The Complete Works", "📜 The Shakespearean Canon"],
	},
	{
		question: "What is the name of the character in Shakespeare's 'The Tempest' who is the rightful Duke of Milan?",
		answer: "🤴 Prospero",
		options: ["🧙 Merlin", "🤴 Prospero", "👸 Miranda", "🦜 Ariel"],
	},
	{
		question: "What is the name of the Shakespearean play in which the character Iago is a villain?",
		answer: "🕵️ Othello",
		options: ["🎭 Romeo and Juliet", "👑 Henry V", "🕵️ Othello", "👑 Richard III"],
	},
	{
		question: "In what year did Shakespeare die?",
		answer: "💀 1616",
		options: ["💀 1603", "💀 1616", "💀 1625", "💀 1632"],
	},
	{
		question: "What is the scientific term for the 'butterflies in the stomach' feeling?",
		answer: "🦋 Euphoria",
		options: ["🤢 Nausea", "😢 Sadness", "🦋 Euphoria", "🤮 Vomiting"],
	},
	{
		question: "What is the hormone associated with bonding and affection?",
		answer: "🤍 Oxytocin",
		options: ["💉 Adrenaline", "👨‍🔬 Insulin", "🤍 Oxytocin", "🧬 Testosterone"],
	},
	{
		question: "What is the phenomenon of an electric current flowing through a gas, producing light and heat?",
		answer: "🔌 Plasma",
		options: ["🔋 Voltage", "🔥 Combustion", "🌪️ Tornado", "🔌 Plasma"]
	},
	{
		question: "What is the study of the physical and chemical properties of rocks and minerals?",
		answer: "🪨 Petrology",
		options: ["🌍 Geology", "🐚 Paleontology", "🦷 Odontology", "🪨 Petrology"]
	},
	{
		question: "What is the process of converting a liquid into a gas called?",
		answer: "💨 Vaporization",
		options: ["🌊 Sublimation", "💨 Vaporization", "🧊 Freezing", "🌬️ Wind"]
	},
	{
		question: "What is the unit of measurement for electrical resistance?",
		answer: "🔥 Ohm",
		options: ["👥 Watt", "💡 Lumen", "🔥 Ohm", "🌡️ Celsius"]
	},
	{
		question: "What is the study of the interaction between organisms and their environment called?",
		answer: "🌿 Ecology",
		options: ["🦁 Zoology", "🌿 Ecology", "🧬 Genetics", "🔬 Microbiology"]
	},
	{
		question: "What is the measure of the degree of hotness or coldness of an object?",
		answer: "🌡️ Temperature",
		options: ["📏 Length", "📈 Velocity", "🌡️ Temperature", "🔌 Current"]
	},
	{
		question: "What is the phenomenon of an object continuing to move at a constant velocity in the absence of an external force?",
		answer: "🌀 Inertia",
		options: ["🔥 Combustion", "🏃‍♂️ Motion", "🌀 Inertia", "🌪️ Cyclone"]
	},
	{
		question: "What is the study of the properties and behavior of matter and energy called?",
		answer: "🔬 Physics",
		options: ["🧬 Biology", "🔬 Physics", "🔍 Chemistry", "🌍 Geology"]
	},
	{
		question: "What is the process of reducing the size of a particle by crushing, grinding or milling called?",
		answer: "🔨 Comminution",
		options: ["📏 Measurement", "👥 Collaboration", "🔨 Comminution", "🌡️ Transmutation"]
	},
	{
		question: "What is the ability of an atom or molecule to attract electrons towards itself called?",
		answer: "🔒 Electronegativity",
		options: ["📈 Velocity", "📈 Momentum", "🔒 Electronegativity", "🔌 Conductivity"]
	},
	{
		question: "What is the process of removing salt and other minerals from seawater called?",
		answer: "🚰 Desalination",
		options: ["🌊 Erosion", "🚰 Desalination", "🌡️ Thermal inversion", "🧊 Solidification"]
	},
	{
		question: "What is the phenomenon in which two people's heartbeats synchronize when they are close to each other?",
		answer: "💓 Interpersonal synchronization",
		options: ["🌀 Vortex shedding", "💓 Interpersonal synchronization", "🐟 Flocking behavior", "🔒 Coupling"],
	},

	{
		question: "What is the scientific term for a 'love hormone'?",
		answer: "💕 Oxytocin",
		options: ["👀 Dopamine", "💉 Insulin", "💕 Oxytocin", "🧠 Endorphins"]
	},
	{
		question: "What is the term for the chemical reaction that causes the feeling of love and attraction?",
		answer: "❤️ Phenylethylamine (PEA)",
		options: ["🔥 Combustion", "💊 Serotonin", "❤️ Phenylethylamine (PEA)", "🌡️ Thermogenesis"]
	},
	{
		question: "What is the name of the part of the brain that is associated with the feeling of love?",
		answer: "🧠 Limbic system",
		options: ["👁️ Occipital lobe", "🧠 Limbic system", "👂 Auditory cortex", "🗣️ Broca's area"]
	},
	{
		question: "What is the term for the physical attraction to someone based on their appearance?",
		answer: "👀 Aesthetic attraction",
		options: ["🧠 Emotional attraction", "👥 Social attraction", "👀 Aesthetic attraction", "💕 Romantic attraction"]
	},
	{
		question: "What is the term for the attraction to someone's personality and character traits?",
		answer: "🧠 Sapiosexual",
		options: ["👥 Social attraction", "👀 Aesthetic attraction", "🧠 Emotional attraction", "🧠 Sapiosexual"]
	},
	{
		question: "What is the term for the feeling of strong admiration and devotion towards someone?",
		answer: "🥰 Adoration",
		options: ["🔥 Passion", "💔 Heartbreak", "👻 Infatuation", "🥰 Adoration"]
	},
	{
		question: "What is the term for the state of being deeply in love and feeling happy and content?",
		answer: "🌞 Bliss",
		options: ["🔥 Passion", "🌧️ Heartache", "🌞 Bliss", "🌪️ Turmoil"]
	},
	{
		question: "What is the term for the attraction to people who do not conform to traditional gender roles or expressions?",
		answer: "🌈 Androgyny",
		options: ["🧔 Masculinity", "💄 Femininity", "🌈 Androgyny", "👥 Non-binary"]
	},
	{
		question: "What is the term for the attraction to people of multiple genders or gender expressions?",
		answer: "🌈 Pansexuality",
		options: ["👥 Bisexuality", "🌈 Pansexuality", "👥 Polysexuality", "👥 Asexuality"]
	},
	{
		question: "What is the name of the part of the brain that is responsible for romantic love?",
		answer: "💘 Ventral tegmental area",
		options: ["🧠 Cerebellum", "💘 Ventral tegmental area", "👁️‍🗨️ Occipital lobe", "🤖 Cingulate cortex"],
	},
	{
		question: "What is the term for the study of the biological basis of social behavior?",
		answer: "🐒 Sociobiology",
		options: ["🌍 Geology", "👥 Sociology", "🐒 Sociobiology", "🌿 Botany"],
	},
	{
		question: "What is the term for the evolutionary phenomenon in which an animal helps others at a cost to itself?",
		answer: "🐝 Altruism",
		options: ["🐍 Aggression", "🐒 Socialization", "🐝 Altruism", "🦁 Dominance"],
	},
	{
		question: "What is the scientific term for 'puppy love' or a crush?",
		answer: "💘 Limerence",
		options: ["😍 Infatuation", "💔 Heartbreak", "💘 Limerence", "👫 Intimacy"],
	},
	{
		question: "What is the term for the feeling of deep affection between two people?",
		answer: "❤️ Love",
		options: ["🤝 Friendship", "💔 Heartbreak", "❤️ Love", "💼 Business"]
	},
	{
		question: "What is the name of the psychological theory that suggests that people are attracted to those who are similar to them?",
		answer: "👫 Similarity-attraction theory",
		options: ["🔥 Passionate love theory", "👥 Social exchange theory", "👫 Similarity-attraction theory", "🤝 Equity theory"]
	},
	{
		question: "What is the name for the hormone that is produced during stress and increases heart rate and blood pressure?",
		answer: "🐅 Cortisol",
		options: ["🌞 Vitamin D", "🌿 Melatonin", "🐅 Cortisol", "🧪 Insulin"]
	},
	{
		question: "What is the term for the force of attraction between two masses?",
		answer: "🪐 Gravity",
		options: ["🔥 Combustion", "🌬️ Wind", "🌊 Wave", "🪐 Gravity"]
	},
	{
		question: "What is the hormone often called the “love hormone”?",
		answer: "💕 Oxytocin",
		options: ["🧬 Insulin", "🔬 Cortisol", "💕 Oxytocin", "🧪 Serotonin"]
	},
	{
		question: "What is the scientific study of human attraction and intimate relationships called?",
		answer: "❤️ Psychobiology",
		options: ["👨‍👩‍👧‍👦 Sociology", "🧠 Psychology", "❤️ Psychobiology", "📈 Economics"],
	},
	{
		question: "What is the term for the bond between two atoms that share electrons?",
		answer: "💘 Covalent bond",
		options: ["🔥 Ionic bond", "💕 Hydrogen bond", "💘 Covalent bond", "🌀 Van der Waals force"],
	},
	{
		question: "What is the name for the chemical reaction that occurs when a metal reacts with oxygen to produce a metal oxide?",
		answer: "❤️ Combustion",
		options: ["🔥 Melting", "💧 Dissolving", "❤️ Combustion", "🌀 Evaporation"],
	},
	{
		question: "What is the term for the energy that causes molecules to move faster?",
		answer: "💓 Heat energy",
		options: ["🔋 Electrical energy", "💡 Light energy", "💓 Heat energy", "🌀 Sound energy"],
	},
	{
		question: "What is the process by which a sperm cell fuses with an egg cell?",
		answer: "👶 Fertilization",
		options: ["🌿 Photosynthesis", "🌋 Eruption", "👶 Fertilization", "🧫 Fermentation"],
	},
	{
		question: "What is the term for the phenomenon in which a group of people become more extreme in their views after discussing them with like-minded individuals?",
		answer: "❤️ Group polarization",
		options: ["🗣️ Groupthink", "🌐 Globalization", "❤️ Group polarization", "🧠 Cognitive dissonance"],
	},
	{
		question: "What is the name for the process by which the body converts food into energy?",
		answer: "💪 Metabolism",
		options: ["🍽️ Digestion", "🧬 Replication", "💪 Metabolism", "🌡️ Homeostasis"],
	},
	{
		question: "What is the process by which an organism evolves to better suit its environment?",
		answer: "💕 Natural selection",
		options: ["👨‍👩‍👧‍👦 Socialization", "🧬 Genetic modification", "💕 Natural selection", "🗺️ Migration"],
	},
	{
		question: "What is the term for the process by which plants convert light energy into chemical energy?",
		answer: "🌿 Photosynthesis",
		options: ["🌪️ Tornado", "🌊 Erosion", "🌿 Photosynthesis", "🌋 Eruption"],
	},
	{
		question: "🗽 Which US president issued the Emancipation Proclamation?",
		answer: "🗽 Abraham Lincoln",
		options: [
			"🗽 George Washington",
			"🗽 Thomas Jefferson",
			"🗽 Abraham Lincoln",
			"🗽 Franklin D. Roosevelt"
		]
	},
	{
		question: "Which symbol is used to indicate a square root?",
		answer: "🔲",
		options: ["🔴", "🔵", "🔲", "🔳"]
	},
	{
		question: "What is the process of converting a liquid into a gas called?",
		answer: "💨",
		options: ["💧", "🔥", "💨", "❄️"]
	},
	{
		question: "What is the unit of electric current?",
		answer: "🔌",
		options: ["🔋", "🔌", "💡", "📡"]
	},
	{
		question: "What is the formula for acceleration?",
		answer: "🚀",
		options: ["🚘", "🏃", "🚀", "🚤"]
	},
	{
		question: "What is the largest planet in our solar system?",
		answer: "🪐",
		options: ["☀️", "🌕", "🌎", "🪐"]
	},
	{
		question: "What is the process of converting a solid directly to a gas called?",
		answer: "🌬️",
		options: ["🌋", "🌊", "🌬️", "🔥"]
	},
	{
		question: "What is the smallest prime number?",
		answer: "2️⃣",
		options: ["0️⃣", "1️⃣", "2️⃣", "3️⃣"]
	},
	{
		question: "What is the unit of force?",
		answer: "🏋️",
		options: ["🏊", "🚴", "🏋️", "🏃"]
	},
	{
		question: "What is the process of changing a solid directly into a gas without passing through the liquid state called?",
		answer: "🌫️",
		options: ["🌡️", "🌬️", "🌫️", "🌋"]
	},
	{
		question: "What is the process of converting a liquid into a gas called?",
		answer: "Evaporation 💨",
		options: [
			"Condensation ❄️",
			"Freezing 🧊",
			"Melting 🔥",
			"Evaporation 💨"
		]
	},
	{
		question: "What is the smallest prime number?",
		answer: "2️⃣",
		options: [
			"1️⃣ One",
			"2️⃣ Two",
			"3️⃣ Three",
			"4️⃣ Four"
		]
	},
	{
		question: "What is the formula for calculating the area of a circle?",
		answer: "πr² 🥧",
		options: [
			"πr 🍕",
			"2πr 🍔",
			"2r 🍰",
			"πr² 🥧"
		]
	},
	{
		question: "What is the name of the device that is used to measure current?",
		answer: "Ammeter 🔍",
		options: [
			"Voltmeter 🔭",
			"Thermometer 🌡️",
			"Barometer 🌬️",
			"Ammeter 🔍"
		]
	},
	{
		question: "What is the smallest unit of storage in a computer?",
		answer: "Bit",
		options: ["Byte", "Kilobyte", "Megabyte", "Bit"]
	},
	{
		question: "Which of the following is not a data structure?",
		answer: "Binary function",
		options: ["Stack", "Queue", "Tree", "Binary function"]
	},
	{
		question: "What is the unit of frequency?",
		answer: "Hertz",
		options: ["Watt", "Ohm", "Hertz", "Ampere"]
	},
	{
		question: "What is the process called by which a computer retrieves a previously stored instruction?",
		answer: "Fetch",
		options: ["Store", "Load", "Fetch", "Execute"]
	},
	{
		question: "What is the term for a positive electrode?",
		answer: "🔴 Anode",
		options: ["🟢 Cathode", "🔴 Anode", "🟡 Diode", "🟣 Triode"]
	},
	{
		question: "What is the force that opposes motion called?",
		answer: "🛑 Friction",
		options: ["🔥 Combustion", "🌬️ Wind", "🛑 Friction", "⚡ Electricity"]
	},
	{
		question: "What is the formula for the area of a rectangle?",
		answer: "🟩 Length x Width",
		options: ["🔺 Base x Height", "🟨 Radius x 2π", "🟩 Length x Width", "🟦 (Base + Top) x Height / 2"]
	},
	{
		question: "What is the smallest unit of digital information?",
		answer: "💻 Bit",
		options: ["📁 Byte", "💾 Floppy Disk", "💻 Bit", "🖥️ Monitor"]
	},
	{
		question: "What is the process of nuclear decay in which an atomic nucleus splits into smaller fragments called?",
		answer: "☢️ Fission",
		options: ["☢️ Fission", "☢️ Fusion", "🧪 Oxidation", "🔥 Combustion"]
	},
	{
		question: "What is the term for the bending of a wave as it passes through a medium?",
		answer: "🌊 Refraction",
		options: ["🌈 Reflection", "🔊 Amplification", "🌊 Refraction", "👻 Ghosting"]
	},
	{
		question: "What is the process of converting sugar into alcohol called?",
		answer: "🍺 Fermentation",
		options: ["🌋 Eruption", "🥩 Grilling", "🍺 Fermentation", "🥣 Boiling"]
	},
	{
		question: "What is the study of the Earth's physical structure and substance called?",
		answer: "🌍 Geology",
		options: ["🐟 Ichthyology", "🌍 Geology", "🍷 Oenology", "🌌 Cosmology"]
	},
	{
		question: "What is the measure of a material's ability to conduct an electric current called?",
		answer: "🔌 Conductivity",
		options: ["📡 Frequency", "📈 Velocity", "🔋 Voltage", "🔌 Conductivity"]
	},
	{
		question: "What is the process of changing a gas into a liquid called?",
		answer: "💧 Condensation",
		options: ["🔥 Combustion", "💧 Condensation", "🌪️ Tornado", "🧊 Freezing"]
	},
	{
		question: "What is the name of the particle that carries an electric charge?",
		answer: "🧲 Electron",
		options: ["🧲 Electron", "🌞 Photon", "🪐 Neutron", "🌈 Proton"]
	},
	{
		question: "What is the process of converting light energy into chemical energy called?",
		answer: "🌿 Photosynthesis",
		options: ["🌪️ Tornado", "🌊 Erosion", "🌿 Photosynthesis", "🌋 Volcanism"]
	},
	{
		question: "What is the SI unit of electric current?",
		answer: "🔌 Ampere",
		options: ["🔌 Ampere", "🔋 Volt", "🧲 Tesla", "📏 Meter"]
	},
	{
		question: "What is the branch of science that deals with the study of insects called?",
		answer: "🐛 Entomology",
		options: ["🌳 Botany", "🐭 Zoology", "🐛 Entomology", "🧬 Genetics"]
	},
	{
		question: "What is the process of converting a solid directly to a gas without passing through the liquid state called?",
		answer: "🌬️ Sublimation",
		options: ["🔥 Combustion", "🌊 Evaporation", "🌬️ Sublimation", "🧊 Freezing"]
	},
	{
		question: "What is the term for the maximum displacement of a wave from its rest position?",
		answer: "🌊 Amplitude",
		options: ["🌊 Amplitude", "🌈 Wavelength", "🌊 Frequency", "🔊 Volume"]
	},
	{
		question: "What is the branch of science that deals with the study of fungi called?",
		answer: "🍄 Mycology",
		options: ["🌿 Botany", "🐟 Ichthyology", "🍄 Mycology", "🐅 Zoology"]
	},
	{
		question: "What is the process of converting a liquid into a gas called?",
		answer: "🌊 Vaporization",
		options: ["🔥 Combustion", "🌊 Vaporization", "🧊 Freezing", "💧 Condensation"]
	},
	{
		question: "What is the term for the ability of a material to be drawn out into a thin wire?",
		answer: "🔗 Ductility",
		options: ["🔋 Voltage", "🔗 Ductility", "🔌 Conductivity", "📏 Density"]
	},
	{
		question: "What is the branch of science that deals with the study of rocks called?",
		answer: "🪨 Petrology",
		options: ["🔬 Chemistry", "🪨 Petrology", "🍷 Oenology", "🌌 Astronomy"]
	},
	{
		question: "What is the process of converting a gas into a liquid called?",
		answer: "💧 Condensation",
		options: ["🔥 Combustion", "💧 Condensation", "🌬️ Sublimation", "🧊 Freezing"]
	},
	{
		question: "What is the term for the curved path of an object around a point in space?",
		answer: "🛰️ Orbit",
		options: ["🔭 Telescope", "🛸 UFO", "🛰️ Orbit", "🌌 Galaxy"]
	},
	{
		question: "What is the study of the relationship between living organisms and their environment called?",
		answer: "🌱 Ecology",
		options: ["🐒 Anthropology", "🌱 Ecology", "🌳 Botany", "🐟 Ichthyology"]
	},
	{
		question: "What is the study of the relationship between living organisms and their environment called?",
		answer: "🌱 Ecology",
		options: ["🧬 Genetics", "🔬 Microbiology", "🌱 Ecology", "🧪 Chemistry"]
	},
	{
		question: "What is the term for the force that holds atoms together in a molecule?",
		answer: "💞 Chemical bond",
		options: ["🔥 Thermal energy", "🌬️ Wind force", "💞 Chemical bond", "👥 Social bond"]
	},
	{
		question: "What is the process of converting a liquid into a gas called?",
		answer: "💨 Evaporation",
		options: ["🧊 Solidification", "💨 Evaporation", "🌊 Flooding", "🔥 Combustion"]
	},
	{
		question: "What is the term for the measure of how much matter an object contains?",
		answer: "🔍 Mass",
		options: ["📏 Length", "🌡️ Temperature", "🔍 Mass", "📈 Velocity"]
	},
	{
		question: "What is the study of the behavior and properties of matter called?",
		answer: "🧪 Chemistry",
		options: ["🔭 Astronomy", "🧬 Genetics", "🧪 Chemistry", "🌌 Cosmology"]
	},
	{
		question: "What is the process of converting a solid directly into a gas called?",
		answer: "🌬️ Sublimation",
		options: ["💨 Evaporation", "🧊 Freezing", "🌬️ Sublimation", "🌊 Erosion"]
	},
	{
		question: "What is the term for the amount of space an object takes up?",
		answer: "📐 Volume",
		options: ["📏 Length", "🔍 Mass", "📐 Volume", "🔺 Area"]
	},
	{
		question: "What is the measure of the amount of light that passes through a material called?",
		answer: "🌞 Transparency",
		options: ["🌡️ Temperature", "🌞 Transparency", "👻 Invisibility", "🔥 Combustion"]
	},
	{
		question: "What is the term for the measure of the average kinetic energy of the particles in a substance?",
		answer: "🌡️ Temperature",
		options: ["📈 Velocity", "🔍 Mass", "🌡️ Temperature", "🔋 Voltage"]
	},
	{
		question: "Which device is used to amplify electrical signals?",
		answer: "Amplifier",
		options: ["Modulator", "Transducer", "Amplifier", "Attenuator"]
	},
	{
		question: "What is the process of converting a digital signal into an analog signal?",
		answer: "Digital-to-Analog Conversion",
		options: ["Analog-to-Digital Conversion", "Digital-to-Analog Conversion", "Frequency Modulation", "Amplitude Modulation"]
	},

	{
		question: "What is the process of converting a gas into a liquid called?",
		answer: "Condensation 💧",
		options: [
			"Evaporation 💨",
			"Freezing 🧊",
			"Melting 🔥",
			"Condensation 💧"
		]
	},
	{
		question: "Which of the following is not a type of loop in programming?",
		answer: "Conditional loop",
		options: ["For loop", "While loop", "Do-while loop", "Conditional loop"]
	},
	{
		question: "What is the study of the relationships between living organisms and their environment called?",
		answer: "Ecology 🌳",
		options: [
			"Biology 🧬",
			"Chemistry 🔬",
			"Physics 🌌",
			"Ecology 🌳"
		]
	},
	{
		question: "What is the process of converting a solid directly to a gas called?",
		answer: "Sublimation 🌫️",
		options: [
			"Melting 🔥",
			"Freezing 🧊",
			"Sublimation 🌫️",
			"Evaporation 💨"
		]
	},
	{
		question: "What is the unit of electric current?",
		answer: "Ampere 🔌",
		options: [
			"Volt 🔋",
			"Watt 💡",
			"Ohm 📡",
			"Ampere 🔌"
		]
	},
	{
		question: "What is the formula for acceleration?",
		answer: "a = (v₂ - v₁) / t 🚀",
		options: [
			"v = d / t 🚘",
			"d = v / t 🏃",
			"f = m × a 🏋️",
			"a = (v₂ - v₁) / t 🚀"
		]
	},
	{
		question: "What is the name of the first computer programmer, known for her work on Charles Babbage's early mechanical general-purpose computer, the Analytical Engine?",
		answer: "Ada Lovelace 👩‍💻",
		options: [
			"Grace Hopper 👩",
			"Kathleen Antonelli 🧑",
			"Ada Lovelace 👩‍💻",
			"Annie Easley 👩‍"
		]
	},
	{
		question: "What is the name of the first computer programmer, known for her work on Charles Babbage's early mechanical general-purpose computer, the Analytical Engine?",
		answer: "👩‍💻",
		options: ["🧔", "🧑", "👩", "👩‍💻"]
	},
	{
		question: "What is the formula for calculating the area of a circle?",
		answer: "🥧",
		options: ["🍔", "🍕", "🥧", "🍰"]
	},
	{
		question: "What is the name of the device that is used to measure current?",
		answer: "🔍",
		options: ["📏", "🔍", "🔭", "📌"]
	},
	{
		question: "What is the process of converting a gas into a liquid called?",
		answer: "💧",
		options: ["💥", "💧", "🔥", "💨"]
	},
	{
		question: "What is the study of the relationships between living organisms and their environment called?",
		answer: "🌳",
		options: ["🌞", "🌳", "🌊", "🐻"]
	},
	{
		question: "🎬 Who directed the 1994 crime film 'Pulp Fiction'?",
		answer: "🎬 Quentin Tarantino",
		options: [
			"🎬 Steven Spielberg",
			"🎬 Martin Scorsese",
			"🎬 Quentin Tarantino",
			"🎬 Francis Ford Coppola"
		]
	},
	{
		question: "What is the unit of measurement for electric current?",
		answer: "🔌 Ampere",
		options: ["🧲 Gauss", "🔌 Ampere", "🔋 Volt", "📡 Hertz"]
	},
	{
		question: "What is the term for a substance that cannot be broken down into simpler substances by chemical means?",
		answer: "🧪 Element",
		options: ["🔬 Molecule", "🧫 Virus", "🧪 Element", "🍞 Carbohydrate"]
	},
	{
		question: "What is the process of changing a solid directly into a gas without passing through a liquid phase called?",
		answer: "🌬️ Sublimation",
		options: ["🔥 Combustion", "🌬️ Sublimation", "💧 Condensation", "🧊 Freezing"]
	},
	{
		question: "What is the measure of the amount of matter in an object called?",
		answer: "⚖️ Mass",
		options: ["📈 Velocity", "🔋 Voltage", "⚖️ Mass", "📡 Frequency"]
	},
	{
		question: "What is the term for the force that opposes the flow of electric current?",
		answer: "🧊 Resistance",
		options: ["🔋 Voltage", "🌊 Current", "🧊 Resistance", "📈 Power"]
	},
	{
		question: "What is the process of converting light energy into electrical energy called?",
		answer: "🔆 Photovoltaics",
		options: ["🌪️ Tornado", "🧊 Freezing", "🔆 Photovoltaics", "🌊 Wave energy"]
	},
	{
		question: "What is the term for a substance that speeds up a chemical reaction without being consumed in the reaction?",
		answer: "🧪 Catalyst",
		options: ["🔥 Fuel", "🧪 Catalyst", "🧫 Antibiotic", "🔬 Reagent"]
	},
	{
		question: "What is the measure of the degree of hotness or coldness of an object or substance?",
		answer: "🌡️ Temperature",
		options: ["📏 Length", "🔋 Voltage", "🌡️ Temperature", "⏰ Time"]
	},
	{
		question: "What is the term for the process of converting a liquid into a gas?",
		answer: "🌫️ Evaporation",
		options: ["💧 Condensation", "🌬️ Sublimation", "🌫️ Evaporation", "🔥 Combustion"]
	},
	{
		question: "What is the term for a substance that can accept a pair of electrons from another molecule or atom?",
		answer: "🧪 Lewis acid",
		options: ["🧪 Lewis base", "🧪 Organic compound", "🧪 Lewis acid", "🧫 Antibody"]
	},
	{
		question: "What is a database?",
		answer: "A collection of data that is organized and can be accessed, managed, and updated 🗃️",
		options: [
			"A type of animal 🐘",
			"A type of food 🍕",
			"A collection of data that is organized and can be accessed, managed, and updated 🗃️",
			"A type of car 🚗"
		]
	},
	{
		question: "What is the primary function of a 🔋 battery?",
		answer: "To store and release electrical energy ⚡",
		options: [
			"To store and release electrical energy ⚡",
			"To generate electrical energy ⚡",
			"To convert electrical energy to mechanical energy ⚙️",
			"To convert mechanical energy to electrical energy ⚙️"
		]
	},
	{
		question: "What does CSS stand for?",
		answer: "Cascading Style Sheets ✨",
		options: [
			"Cascading Style Sheets ✨",
			"Creative Style Sheets 🎨",
			"Cascading Style Scripts 💻",
			"Computer Style Sheets 🖥️"
		]
	},
	{
		question: "What is the programming language used to create Android apps?",
		answer: "Java ☕",
		options: [
			"C++ 🖥️",
			"Python 🐍",
			"Swift 🍎",
			"Java ☕"
		]
	},
	{
		question: "What does SQL stand for?",
		answer: "Structured Query Language 🗃️",
		options: [
			"Structured Query Language 🗃️",
			"Simple Query Language 🔍",
			"System Query Language 💻",
			"Standard Query Language 📈"
		]
	},
	{
		question: "What is the name of the coding language used to create web pages?",
		answer: "HTML 🌐",
		options: [
			"CSS ✨",
			"JavaScript 🚀",
			"Python 🐍",
			"HTML 🌐"
		]
	},
	{
		question: "What is the name of the open-source software development platform created by Microsoft?",
		answer: "GitHub 🐙",
		options: [
			"GitLab 🦊",
			"Bitbucket 🐶",
			"SourceForge 🌍",
			"GitHub 🐙"
		]
	},
	{
		question: "What is the 🌡️ boiling point of water at sea level?",
		answer: "100 °C (212 °F)",
		options: [
			"0 °C (32 °F)",
			"25 °C (77 °F)",
			"50 °C (122 °F)",
			"100 °C (212 °F)"
		]
	},
	{
		question: "What is the most common 🐍 snake found in North America?",
		answer: "The garter snake 🐍",
		options: [
			"The coral snake 🐍",
			"The diamondback rattlesnake 🐍",
			"The copperhead snake 🐍",
			"The garter snake 🐍"
		]
	},
	{
		question: "What does the 💡 acronym CPU stand for?",
		answer: "Central Processing Unit",
		options: [
			"Central Programming Unit",
			"Core Programming Unit",
			"Central Processing Unit",
			"Core Processing Unit"
		]
	},
	{
		question: "What type of personality test measures your unconscious thoughts and feelings?",
		answer: "Projective personality test",
		options: [
			"Trait personality test",
			"Projective personality test",
			"Self-report personality test",
			"Behavioral personality test"
		]
	},
	{
		question: "What do you call a type of programming that involves building applications using pre-built components?",
		answer: "Low-code development",
		options: [
			"Low-code development",
			"Object-oriented programming",
			"Functional programming",
			"Procedural programming"
		]
	},
	{
		question: "Which programming language is most commonly used for web development?",
		answer: "JavaScript",
		options: [
			"Python",
			"Java",
			"Ruby",
			"JavaScript"
		]
	},
	{
		question: "What is a type of artificial intelligence that involves training a model on large amounts of data?",
		answer: "Machine learning",
		options: [
			"Neural networks",
			"Expert systems",
			"Fuzzy logic",
			"Machine learning"
		]
	},
	{
		question: "What type of database is designed to handle large amounts of data and high traffic?",
		answer: "NoSQL database",
		options: [
			"Relational database",
			"Object-oriented database",
			"Hierarchical database",
			"NoSQL database"
		]
	},
	{
		question: "What is the process of improving a website's ranking in search engine results pages called?",
		answer: "Search engine optimization (SEO)",
		options: [
			"Pay-per-click advertising",
			"Content marketing",
			"Social media marketing",
			"Search engine optimization (SEO)"
		]
	},
	{
		question: "What is a type of network topology where each node is connected to every other node?",
		answer: "Full mesh topology",
		options: [
			"Star topology",
			"Bus topology",
			"Ring topology",
			"Full mesh topology"
		]
	},
	{
		question: "What do you call the process of converting a source code written in a high-level programming language into machine code?",
		answer: "Compilation",
		options: [
			"Interpretation",
			"Compilation",
			"Debugging",
			"Profiling"
		]
	},
	{
		question: "What type of encryption uses the same key for both encryption and decryption?",
		answer: "Symmetric-key encryption",
		options: [
			"Asymmetric-key encryption",
			"Hash encryption",
			"Symmetric-key encryption",
			"Transposition encryption"
		]
	},
	{
		question: "What is a type of cybersecurity attack that involves tricking someone into revealing their login credentials?",
		answer: "Phishing",
		options: [
			"Malware",
			"Ransomware",
			"Phishing",
			"Denial of Service (DoS)"
		]
	},
	{
		question: "What is the highest mountain in the world?",
		answer: "Mount Everest",
		options: [
			"Mount Kilimanjaro",
			"Mount Everest",
			"Mount Denali",
			"Mount Aconcagua"
		]
	},
	{
		question: "What is cloud computing?",
		answer: "The delivery of computing services over the Internet ☁️",
		options: [
			"A type of weather ☀️",
			"A type of dance 💃",
			"The delivery of computing services over the Internet ☁️",
			"A type of plant 🌿"
		]
	},
	{
		question: "What is blockchain?",
		answer: "A decentralized, distributed ledger technology that maintains a continuously growing list of records using cryptography 🔗",
		options: [
			"A type of building material 🏠",
			"A type of candy 🍬",
			"A decentralized, distributed ledger technology that maintains a continuously growing list of records using cryptography 🔗",
			"A type of exercise 🏋️"
		]
	},
	{
		question: "What is machine learning?",
		answer: "A subset of artificial intelligence that involves the development of algorithms and statistical models that enable computer systems to learn from and improve upon their performance on a specific task over time, without being explicitly programmed 🤖📈",
		options: [
			"A type of art 🎨",
			"A type of sport 🏀",
			"A subset of artificial intelligence that involves the development of algorithms and statistical models that enable computer systems to learn from and improve upon their performance on a specific task over time, without being explicitly programmed 🤖📈",
			"A type of insect 🐛"
		]
	},
	{
		question: "What is the difference between a psychologist and a psychiatrist?",
		answer: "A psychologist is a mental health professional who specializes in talk therapy and behavior modification, while a psychiatrist is a medical doctor who can prescribe medication in addition to talk therapy.",
		options: [
			"A psychologist can prescribe medication in addition to talk therapy.",
			"A psychiatrist is a mental health professional who specializes in talk therapy and behavior modification.",
			"A psychologist is a medical doctor who can prescribe medication in addition to talk therapy.",
			"A psychologist is a mental health professional who specializes in talk therapy and behavior modification, while a psychiatrist is a medical doctor who can prescribe medication in addition to talk therapy."
		]
	},
	{
		question: "What is an API?",
		answer: "A set of protocols, routines, and tools for building software applications 🛠️",
		options: [
			"A type of drink commonly found in South America ☕",
			"A machine that automates repetitive tasks 🤖",
			"A set of protocols, routines, and tools for building software applications 🛠️",
			"A type of music synthesizer 🎹"
		]
	},
	{
		question: "What is the most popular programming language?",
		answer: "JavaScript 🚀",
		options: [
			"Java ☕️",
			"Python 🐍",
			"JavaScript 🚀",
			"C++ 💻"
		]
	},
	{
		question: "What is the largest unit of memory?",
		answer: "Terabyte 💾",
		options: [
			"Byte 🧮",
			"Kilobyte 📀",
			"Gigabyte 💽",
			"Terabyte 💾"
		]
	},
	{
		question: "What does CSS stand for?",
		answer: "Cascading Style Sheets 🎨",
		options: [
			"Creative Style Sheets 🎭",
			"Cascading Style Sheets 🎨",
			"Cascading Sheet Styles 📃",
			"Cascading Style Selection 🎯"
		]
	},
	{
		question: "What does HTML stand for?",
		answer: "Hypertext Markup Language 🌐",
		options: [
			"Hyperspace Markup Language 🚀",
			"Hypertext Markup Language 🌐",
			"Hyperlink Markup Language 🔗",
			"Hypertext Marking Language ✏️"
		]
	},
	{
		question: "What is the shortcut to paste on Windows?",
		answer: "Ctrl + V 📋",
		options: [
			"Ctrl + P 🖨️",
			"Ctrl + C 📑",
			"Ctrl + A 🗂️",
			"Ctrl + V 📋"
		]
	},
	{
		question: "What does SQL stand for?",
		answer: "Structured Query Language 📊",
		options: [
			"Simple Query Language 🔍",
			"Structured Question Language ❓",
			"Structured Query Language 📊",
			"Specialized Query Language 🎓"
		]
	},
	{
		question: "What is the default port for HTTP?",
		answer: "80 🌐",
		options: [
			"22 🛡️",
			"80 🌐",
			"443 🔒",
			"8080 🌐"
		]
	},
	{
		question: "What is the shortcut to save on Windows?",
		answer: "Ctrl + S 💾",
		options: [
			"Ctrl + P 🖨️",
			"Ctrl + C 📑",
			"Ctrl + A 🗂️",
			"Ctrl + S 💾"
		]
	},
	{
		question: "What is the smallest unit of data in a computer?",
		answer: "Bit 0️⃣/1️⃣",
		options: [
			"Byte 🖥️",
			"Nibble 🍫",
			"Pixel 🖼️",
			"Bit 0️⃣/1️⃣"
		]
	},
	{
		question: "What programming language is commonly used for creating Android apps?",
		answer: "Java ☕",
		options: [
			"Python 🐍",
			"Ruby 💎",
			"Java ☕",
			"Swift 🍎"
		]
	},
	{
		question: "What does CPU stand for in computer terms?",
		answer: "Central Processing Unit 💻",
		options: [
			"Computer Programming Unit 👨‍💻",
			"Central Programming Unit 💾",
			"Central Processing Unit 💻",
			"Computer Processing Unit 🖥️"
		]
	},
	{
		question: "What is the name for a computer program that converts code written in a high-level programming language into machine code?",
		answer: "Compiler 🖥️",
		options: [
			"Interpreter 🌐",
			"Debugger 🐛",
			"Compiler 🖥️",
			"Assembler 🛠️"
		]
	},
	{
		question: "What is the name for a data structure that allows you to store and retrieve items in a last-in, first-out (LIFO) order?",
		answer: "Stack 📚",
		options: [
			"Queue 🚶",
			"Array 🗂️",
			"Stack 📚",
			"Linked List 🔗"
		]
	},
	{
		question: "What is the name for a programming language that allows you to create dynamic, interactive web pages?",
		answer: "JavaScript 🌐",
		options: [
			"HTML 📄",
			"CSS 🎨",
			"Java ☕",
			"JavaScript 🌐"
		]
	},
	{
		question: "What is the name for a system for naming and organizing files and folders on a computer?",
		answer: "File system 🗃️",
		options: [
			"Operating system 🖥️",
			"File system 🗃️",
			"Directory structure 📁",
			"Command prompt 📜"
		]
	},
	{
		question: "What is the name for a method of encryption that uses two keys, one for encryption and one for decryption?",
		answer: "Public-key encryption 🔒",
		options: [
			"Private-key encryption 🔑",
			"Symmetric encryption 🗝️",
			"Asymmetric encryption 🎭",
			"Public-key encryption 🔒"
		]
	},
	{
		question: "What is a network firewall designed to do?",
		answer: "Protect a computer or network from unauthorized access 🛡️",
		options: [
			"Block all internet traffic 🚫",
			"Speed up internet connectivity 🚀",
			"Encrypt all internet traffic 🔒",
			"Protect a computer or network from unauthorized access 🛡️"
		]
	},
	{
		question: "What is HTML an acronym for?",
		answer: "HyperText Markup Language 📝",
		options: [
			"HyperLink Markup Language 🔗",
			"Hyperspace Markup Language 🚀",
			"HyperTech Markup Language 🤖",
			"HyperText Markup Language 📝"
		]
	},
	{
		question: "What is the function of a router in a computer network?",
		answer: "Direct network traffic between devices 📡",
		options: [
			"Block all incoming network traffic 🚫",
			"Increase internet connectivity speed 🚀",
			"Encrypt all network traffic 🔒",
			"Direct network traffic between devices 📡"
		]
	},
	{
		question: "What is the name of the primary protocol used for sending email on the internet?",
		answer: "SMTP 📧",
		options: [
			"IMAP 📨",
			"POP3 📩",
			"SMTP 📧",
			"HTTP 🌐"
		]
	},
	{
		question: "What does RAM stand for in computer terms?",
		answer: "Random Access Memory 🧠",
		options: [
			"Read Access Memory 📖",
			"Real-time Access Memory ⏰",
			"Rapid Access Memory 🏃",
			"Random Access Memory 🧠"
		]
	},
	{
		question: "What is the function of a modem in a computer network?",
		answer: "Convert digital data to analog signals and vice versa 📶",
		options: [
			"Block all incoming network traffic 🚫",
			"Increase internet connectivity speed 🚀",
			"Encrypt all network traffic 🔒",
			"Convert digital data to analog signals and vice versa 📶"
		]
	},
	{
		question: "What is a DoS attack?",
		answer: "An attack meant to prevent legitimate users from accessing a network 🚫",
		options: [
			"An attack meant to steal data from a network 🔍",
			"An attack meant to encrypt data on a network 🔒",
			"An attack meant to speed up a network 🚀",
			"An attack meant to prevent legitimate users from accessing a network 🚫"
		]
	},
	{
		question: "What does FTP stand for?",
		answer: "File Transfer Protocol 📁",
		options: [
			"File Type Protocol 📊",
			"File Transfer Protocol 📁",
			"File Transmission Process 📨",
			"File Transfer Procedure 📥"
		]
	},
	{
		question: "What is the shortcut to cut on Windows?",
		answer: "Ctrl + X ✂️",
		options: [
			"Ctrl + P 🖨️",
			"Ctrl + C 📑",
			"Ctrl + A 🗂️",
			"Ctrl + X ✂️"
		]
	},
	{
		question: "What is a unit of measurement used to describe the amount of data in a digital file?",
		answer: "Byte 📊",
		options: [
			"Hertz 🎵",
			"Watt ⚡️",
			"Ampere ⚡️",
			"Byte 📊"
		]
	},
	{
		question: "What is the programming language used to create web pages?",
		answer: "HTML 🌐",
		options: [
			"Python 🐍",
			"Java ☕️",
			"C++ 🖥",
			"HTML 🌐"
		]
	},
	{
		question: "What is the programming language used to create dynamic web pages?",
		answer: "JavaScript 🌐",
		options: [
			"CSS 🎨",
			"PHP 🐘",
			"Ruby 💎",
			"JavaScript 🌐"
		]
	},
	{
		question: "What is the process of removing errors from a program called?",
		answer: "Debugging 🐞",
		options: [
			"Encoding 🔡",
			"Compiling 🛠",
			"Debugging 🐞",
			"Decoding 🔤"
		]
	},
	{
		question: "What is the name for the standardized format for compressing a file?",
		answer: "ZIP 📁",
		options: [
			"RAR 📁",
			"TAR 📁",
			"GZIP 📁",
			"ZIP 📁"
		]
	},
	{
		question: "What is the name for the protocol used to access email on a remote server?",
		answer: "IMAP 📧",
		options: [
			"SMTP 📧",
			"FTP 📂",
			"SSH 🛡",
			"IMAP 📧"
		]
	},
	{
		question: "What is the name for the process of converting analog signals into digital signals?",
		answer: "Analog-to-Digital Conversion 🔄",
		options: [
			"Digital-to-Analog Conversion 🔄",
			"Analog-to-Digital Conversion 🔄",
			"Data Encryption 🔒",
			"Data Compression 📉"
		]
	},
	{
		question: "What is the name for the process of combining multiple small packets into a single large packet for more efficient transmission?",
		answer: "Packet Aggregation 📦",
		options: [
			"Packet Switching 🔄",
			"Packet Aggregation 📦",
			"Packet Filtering 🗑",
			"Packet Sniffing 👃"
		]
	},
	{
		question: "What is the name for the technology used to transmit data over a fiber-optic cable?",
		answer: "Optical Fiber 🌈",
		options: [
			"Coaxial Cable 📡",
			"Ethernet Cable 🌐",
			"Twisted Pair Cable 🔗",
			"Optical Fiber 🌈"
		]
	},
	{
		question: "What is the name for the standard network protocol used to transfer files between computers?",
		answer: "FTP 📂",
		options: [
			"HTTP 🌐",
			"SSH 🛡",
			"SMTP 📧",
			"FTP 📂"
		]
	},
	{
		question: "What is the smallest unit of digital information?",
		answer: "Bit 🧑‍💻",
		options: [
			"Byte 📜",
			"Megabyte 💾",
			"Kilobyte 💽",
			"Bit 🧑‍💻"
		]
	},
	{
		question: "What is the process of removing data from a storage device called?",
		answer: "Deleting 🗑️",
		options: [
			"Formatting 💾",
			"Copying 📂",
			"Deleting 🗑️",
			"Encrypting 🔒"
		]
	},
	{
		question: "What is the most common type of computer processor used today?",
		answer: "x86 💻",
		options: [
			"PowerPC 🕹️",
			"ARM 📱",
			"MIPS 🧭",
			"x86 💻"
		]
	},
	{
		question: "What is the term for software that is free to use, modify, and distribute?",
		answer: "Open source 🆓",
		options: [
			"Shareware 💻",
			"Freeware 🆓",
			"Proprietary 🤫",
			"Open source 🆓"
		]
	},
	{
		question: "What type of software allows users to view web pages on the internet?",
		answer: "Web browser 🌐",
		options: [
			"Operating system 💻",
			"Database software 🗃️",
			"Graphic design software 🎨",
			"Web browser 🌐"
		]
	},
	{
		question: "Which CSS property controls the size of an element's font?",
		answer: "font-size 📐",
		options: [
			"color 🎨",
			"background-color 🎨",
			"font-size 📐",
			"padding 🧦"
		]
	},
	{
		question: "What programming language is often used for creating interactive web pages?",
		answer: "JavaScript 🌐",
		options: [
			"Python 🐍",
			"Ruby 💎",
			"Java ☕",
			"JavaScript 🌐"
		]
	},
	{
		question: "What is the term used to describe the process of finding and fixing errors in code?",
		answer: "Debugging 🐛",
		options: [
			"Refactoring ♻️",
			"Debugging 🐛",
			"Testing 🧪",
			"Optimizing ⚡"
		]
	},
	{
		question: "What does the acronym SQL stand for?",
		answer: "Structured Query Language 💬",
		options: [
			"Standard Query Language 💬",
			"Structured Query Language 💬",
			"Simple Query Language 💬",
			"System Query Language 💬"
		]
	},
	{
		question: "What is the name of the programming language developed by Apple for macOS and iOS?",
		answer: "Swift 🍎",
		options: [
			"Ruby 💎",
			"Swift 🍎",
			"C# 💻",
			"Kotlin 🐱"
		]
	},
	{
		question: "What does the acronym API stand for?",
		answer: "Application Programming Interface 🤖",
		options: [
			"Application Programming Interface 🤖",
			"Application Processing Interface 🤖",
			"Automated Programming Interface 🤖",
			"Automated Processing Interface 🤖"
		]
	},
	{
		question: "What is the process of converting source code into machine code called?",
		answer: "Compilation 🛠️",
		options: [
			"Debugging 🐛",
			"Refactoring ♻️",
			"Compilation 🛠️",
			"Optimizing ⚡"
		]
	},
	{
		question: "Which CSS property controls the spacing between an element's border and its content?",
		answer: "padding 🧦",
		options: [
			"margin 🌳",
			"padding 🧦",
			"border 🚪",
			"height 📏"
		]
	},
	{
		question: "What is an algorithm?",
		answer: "A set of instructions for solving a problem or completing a task, often used in computer programming 🔍",
		options: [
			"A type of musical instrument 🎻",
			"A set of tools for carving wood 🔪",
			"A set of instructions for solving a problem or completing a task, often used in computer programming 🔍",
			"A type of dance move popular in the 1980s 🕺"
		]
	},
	{
		question: "What is cloud computing?",
		answer: "The on-demand delivery of computing services over the internet, including storage, databases, and software ☁️",
		options: [
			"A type of weather phenomenon ☁️",
			"A form of meditation practiced in Asia 🧘‍♀️",
			"The on-demand delivery of computing services over the internet, including storage, databases, and software ☁️",
			"A technique for creating intricate paper designs 📄"
		]
	},
	{
		question: "What is HTML?",
		answer: "The standard markup language for creating web pages and web applications 🌐",
		options: [
			"A type of metal commonly used in jewelry making 💍",
			"The standard markup language for creating web pages and web applications 🌐",
			"A type of food seasoning commonly used in Asian cuisine 🍜",
			"A technique for creating realistic 3D models using a computer 🖥️"
		]
	},
	{
		question: "What is the word for the fear of being alone?",
		answer: "Autophobia 🙍‍♀️",
		options: [
			"Agoraphobia 🏢",
			"Autophobia 🙍‍♀️",
			"Arachnophobia 🕷️",
			"Acrophobia 🏔️"
		]
	},
	{
		question: "What is the emotion of feeling both happy and sad at the same time?",
		answer: "Melancholy 😔😊",
		options: [
			"Euphoria 😁",
			"Melancholy 😔😊",
			"Nostalgia 🌅",
			"Despair 😔"
		]
	},
	{
		question: "What is the psychological term for the fear of failure?",
		answer: "Atychiphobia 🤕",
		options: [
			"Arachnophobia 🕷️",
			"Atychiphobia 🤕",
			"Agoraphobia 🏢",
			"Acrophobia 🏔️"
		]
	},
	{
		question: "What is the word for the feeling of being homesick for a place you've never been to?",
		answer: "Wanderlust 🌍🧳",
		options: [
			"Saudade 🕰️",
			"Hiraeth 🏠",
			"Fernweh 🗺️",
			"Wanderlust 🌍🧳"
		]
	},
	{
		question: "What is the emotion of feeling annoyed and relieved at the same time?",
		answer: "Justrighting 🤷‍♀️",
		options: [
			"Justrighting 🤷‍♀️",
			"Frustrated 😠",
			"Indifferent 😐",
			"Excited 😃"
		]
	},
	{
		question: "What is cognitive behavioral therapy (CBT)?",
		answer: "A type of talk therapy that focuses on changing negative or harmful thought patterns and behaviors by identifying and challenging them.",
		options: [
			"A type of medication used to treat anxiety disorders.",
			"A technique used to induce hypnosis.",
			"A type of talk therapy that focuses on changing negative or harmful thought patterns and behaviors by identifying and challenging them.",
			"A type of therapy that involves exposure to phobias or fears."
		]
	},
	{
		question: "What is the difference between anxiety and depression?",
		answer: "Anxiety is a feeling of unease, such as worry or fear, while depression is a feeling of sadness, loss, or hopelessness.",
		options: [
			"Anxiety is a feeling of sadness, loss, or hopelessness, while depression is a feeling of unease, such as worry or fear.",
			"Anxiety is a mental health disorder, while depression is a physical health disorder.",
			"Anxiety is a feeling of unease, such as worry or fear, while depression is a feeling of sadness, loss, or hopelessness.",
			"Anxiety and depression are the same thing."
		]
	},
	{
		question: "What is the fight or flight response?",
		answer: "A physiological response to a perceived threat, in which the body prepares to either fight the threat or flee from it.",
		options: [
			"A response to a stressful situation in which the individual becomes extremely anxious.",
			"A type of phobia characterized by an intense fear of enclosed spaces.",
			"A physiological response to a perceived threat, in which the body prepares to either fight the threat or flee from it.",
			"A type of personality disorder characterized by an inflated sense of self-importance and a lack of empathy for others."
		]
	},
	{
		question: "What is the placebo effect?",
		answer: "A phenomenon in which a person experiences a perceived benefit from a treatment that has no known therapeutic effect.",
		options: [
			"A type of cognitive distortion in which an individual believes that their thoughts can influence external events.",
			"A type of therapy that involves exposure to bright light to treat seasonal affective disorder.",
			"A phenomenon in which a person experiences a perceived benefit from a treatment that has no known therapeutic effect.",
			"A type of therapy that involves the use of music to treat mental health disorders."
		]
	},
	{
		question: "🎵 What was the first music video ever played on MTV?",
		answer: "🎵 'Video Killed the Radio Star' by The Buggles",
		options: [
			"🎵 'Thriller' by Michael Jackson",
			"🎵 'Money for Nothing' by Dire Straits",
			"🎵 'Video Killed the Radio Star' by The Buggles",
			"🎵 'Billie Jean' by Michael Jackson"
		]
	},
	{
		question: "🏰 What is the name of the palace where the French kings used to live?",
		answer: "🏰 Palace of Versailles",
		options: [
			"🏰 Palace of Versailles",
			"🏰 Palace of Westminster",
			"🏰 Buckingham Palace",
			"🏰 Chateau de Chambord"
		]
	},
	{
		question: "🎬 What is the highest-grossing film franchise of all time?",
		answer: "🎬 Marvel Cinematic Universe",
		options: [
			"🎬 Star Wars",
			"🎬 James Bond",
			"🎬 Harry Potter",
			"🎬 Marvel Cinematic Universe"
		]
	},
	{
		question: "📺 What is the name of the high school in the TV show 'Buffy the Vampire Slayer'?",
		answer: "📺 Sunnydale High School",
		options: [
			"📺 Sunnydale High School",
			"📺 Riverdale High School",
			"📺 Beverly Hills High School",
			"📺 West Beverly High School"
		]
	},
	{
		question: "🎭 Who played the character of Walter White in the TV series 'Breaking Bad'?",
		answer: "🎭 Bryan Cranston",
		options: [
			"🎭 Bryan Cranston",
			"🎭 Matthew McConaughey",
			"🎭 Kevin Spacey",
			"🎭 Jon Hamm"
		]
	},
	{
		question: "♈ What is the astrological sign for someone born on April 10th?",
		answer: "Aries ♈",
		options: [
			"Taurus ♉",
			"Aries ♈",
			"Pisces ♓",
			"Aquarius ♒"
		]
	},
	{
		question: "🌟 What does a person's sun sign represent in astrology?",
		answer: "Their basic personality and ego",
		options: [
			"Their emotional side",
			"Their basic personality and ego",
			"Their communication style",
			"Their love life"
		]
	},
	{
		question: "🔮 What is the term for the study of the positions and aspects of celestial bodies in the belief that they have an influence on the course of natural earthly occurrences?",
		answer: "Astrology 🔮",
		options: [
			"Alchemy",
			"Astronomy",
			"Astrology 🔮",
			"Numerology"
		]
	},
	{
		question: "🌙 What is the astrological sign for someone born on a full moon?",
		answer: "It depends on the person's birth chart",
		options: [
			"Cancer ♋",
			"It depends on the person's birth chart",
			"Leo ♌",
			"Scorpio ♏"
		]
	},
	{
		question: "🪐 What planet is associated with communication, transportation, and technology?",
		answer: "Mercury 🪐",
		options: [
			"Mars ♂",
			"Venus ♀",
			"Jupiter ♃",
			"Mercury 🪐"
		]
	},
	{
		question: "🌌 What is the zodiac?",
		answer: "A circle of twelve 30° divisions of celestial longitude that are centered upon the ecliptic",
		options: [
			"A circle of twelve 30° divisions of celestial longitude that are centered upon the ecliptic",
			"A circle of twelve 30° divisions of celestial latitude that are centered upon the ecliptic",
			"A circle of twelve 30° divisions of celestial longitude that are centered upon the equator",
			"A circle of twelve 30° divisions of celestial latitude that are centered upon the equator"
		]
	},
	{
		question: "🌟 What is a horoscope?",
		answer: "A forecast of a person's future based on the relative positions of the planets",
		options: [
			"A forecast of a person's future based on their zodiac sign",
			"A forecast of a person's future based on the relative positions of the stars",
			"A forecast of a person's future based on the relative positions of the planets",
			"A forecast of a person's future based on their birthdate"
		]
	},
	{
		question: "🔮 What is the term for the zodiac sign that rises on the eastern horizon at the time of a person's birth?",
		answer: "The ascendant or rising sign 🔮",
		options: [
			"The descendant or setting sign",
			"The ascendant or rising sign 🔮",
			"The midheaven or zenith sign",
			"The nadir or bottom sign"
		]
	},
	{
		question: "🪐 What planet is associated with love, beauty, and pleasure?",
		answer: "Venus 🪐",
		options: [
			"Mars ♂",
			"Venus 🪐",
			"Jupiter ♃",
			"Mercury ☿"
		]
	},
	{
		question: "♑ What is the astrological sign for someone born between December 22nd and January 19th?",
		answer: "Capricorn ♑",
		options: [
			"Sagittarius ♐",
			"Aquarius ♒",
			"Capricorn ♑",
			"Pisces ♓"
		]
	},
	{
		question: "🏝️ What is the name of the island nation in the Caribbean that is famous for its cigars?",
		answer: "🏝️ Cuba",
		options: [
			"🏝️ Cuba",
			"🏝️ Jamaica",
			"🏝️ Haiti",
			"🏝️ Dominican Republic"
		]
	},
	{
		question: "🎵 What is the name of the band that sang the hit song 'Stairway to Heaven'?",
		answer: "🎵 Led Zeppelin",
		options: [
			"🎵 Pink Floyd",
			"🎵 Led Zeppelin",
			"🎵 The Rolling Stones",
			"🎵 The Beatles"
		]
	},
	{
		question: "🎥 Who directed the 2010 movie 'Inception'?",
		answer: "🎥 Christopher Nolan",
		options: [
			"🎥 Christopher Nolan",
			"🎥 Quentin Tarantino",
			"🎥 Steven Spielberg",
			"🎥 Martin Scorsese"
		]
	},
	{
		question: "🏀 Who is the NBA all-time leading scorer?",
		answer: "🏀 Kareem Abdul-Jabbar",
		options: [
			"🏀 Kobe Bryant",
			"🏀 Michael Jordan",
			"🏀 LeBron James",
			"🏀 Kareem Abdul-Jabbar"
		]
	},
	{
		question: "🎭 Who played the character of Tony Soprano in the TV series 'The Sopranos'?",
		answer: "🎭 James Gandolfini",
		options: [
			"🎭 James Gandolfini",
			"🎭 Al Pacino",
			"🎭 Robert De Niro",
			"🎭 Marlon Brando"
		]
	},
	{
		question: "🏛️ What is the capital of Spain?",
		answer: "🏛️ Madrid",
		options: [
			"🏛️ Madrid",
			"🏛️ Barcelona",
			"🏛️ Seville",
			"🏛️ Valencia"
		]
	},
	{
		question: "Which planet in our solar system is closest in size to Earth?",
		answer: "Venus",
		options: [
			"Mercury",
			"Mars",
			"Jupiter",
			"Venus"
		]
	},
	{
		question: "What is the capital city of Japan?",
		answer: "Tokyo",
		options: [
			"Kyoto",
			"Osaka",
			"Tokyo",
			"Hiroshima"
		]
	},
	{
		question: "Who wrote the novel 'Pride and Prejudice'?",
		answer: "Jane Austen",
		options: [
			"Virginia Woolf",
			"Jane Austen",
			"Emily Bronte",
			"Charlotte Bronte"
		]
	},
	{
		question: "What is the largest mammal in the world?",
		answer: "Blue whale",
		options: [
			"Elephant",
			"Giraffe",
			"Blue whale",
			"Hippopotamus"
		]
	},
	{
		question: "Who painted the famous artwork 'The Starry Night'?",
		answer: "Vincent van Gogh",
		options: [
			"Leonardo da Vinci",
			"Pablo Picasso",
			"Vincent van Gogh",
			"Claude Monet"
		]
	},
	{
		question: "What is the name of the currency used in Switzerland?",
		answer: "Swiss franc",
		options: [
			"Euro",
			"Pound sterling",
			"Swiss franc",
			"US dollar"
		]
	},
	{
		question: "What is the largest country in South America by area?",
		answer: "Brazil",
		options: [
			"Argentina",
			"Colombia",
			"Peru",
			"Brazil"
		]
	},
	{
		question: "What is the name of the second-largest ocean on Earth?",
		answer: "Atlantic Ocean",
		options: [
			"Indian Ocean",
			"Arctic Ocean",
			"Atlantic Ocean",
			"Southern Ocean"
		]
	},
	{
		question: "Who is the author of the book 'The Hitchhiker's Guide to the Galaxy'?",
		answer: "Douglas Adams",
		options: [
			"J.R.R. Tolkien",
			"Douglas Adams",
			"Stephen King",
			"George Orwell"
		]
	},
	{
		question: "What is the capital of Spain?",
		answer: "Madrid",
		options: [
			"Barcelona",
			"Seville",
			"Madrid",
			"Valencia"
		]
	},
	{
		question: "What is the process by which plants convert light energy into chemical energy called?",
		answer: "Photosynthesis",
		options: [
			"Respiration",
			"Digestion",
			"Photosynthesis",
			"Circulation"
		]
	},
	{
		question: "What is the name of the famous American inventor who is best known for his invention of the light bulb?",
		answer: "Thomas Edison",
		options: [
			"Alexander Graham Bell",
			"Nikola Tesla",
			"Thomas Edison",
			"Henry Ford"
		]
	},
	{
		question: "What is the name of the highest mountain in Africa?",
		answer: "Mount Kilimanjaro",
		options: [
			"Mount Everest",
			"Mount Kilimanjaro",
			"Mount Fuji",
			"Mount McKinley"
		]
	},
	{
		question: "What does 💻 stand for in computing?",
		answer: "Computer",
		options: [
			"Code",
			"Calculator",
			"Computer",
			"Cryptocurrency"
		]
	},
	{
		question: "What is 🎶 Adobe Audition?",
		answer: "Digital Audio Workstation",
		options: [
			"Graphics Editor",
			"Video Editing Software",
			"Digital Audio Workstation",
			"Web Development Tool"
		]
	},
	{
		question: "What is the symbol ♏️ for?",
		answer: "Scorpio",
		options: [
			"Virgo",
			"Leo",
			"Scorpio",
			"Aquarius"
		]
	},
	{
		question: "What is 🌍 the symbol for in HTML?",
		answer: "Globe",
		options: [
			"Menu",
			"Globe",
			"File",
			"Delete"
		]
	},
	{
		question: "What is 🌡️ the symbol for on a weather app?",
		answer: "Temperature",
		options: [
			"Cloud",
			"Rain",
			"Sun",
			"Temperature"
		]
	},
	{
		question: "What is 🔒 a symbol for on a website?",
		answer: "Secure Connection",
		options: [
			"Login",
			"Menu",
			"Search",
			"Secure Connection"
		]
	},
	{
		question: "What is the 🚀 SpaceX rocket called that took humans to space for the first time?",
		answer: "Crew Dragon",
		options: [
			"Falcon 9",
			"Crew Dragon",
			"Starship",
			"Atlas V"
		]
	},
	{
		question: "What is the 🔑 shortcut for 'undo' on a Windows computer?",
		answer: "Ctrl + Z",
		options: [
			"Ctrl + A",
			"Ctrl + C",
			"Ctrl + V",
			"Ctrl + Z"
		]
	},
	{
		question: "What is the 📱 Apple iPhone's virtual assistant called?",
		answer: "Siri",
		options: [
			"Alexa",
			"Google Assistant",
			"Cortana",
			"Siri"
		]
	},
	{
		question: "What is the 🎮 GTA character Trevor Philips' signature clothing item?",
		answer: "Dirty Tank Top",
		options: [
			"Sunglasses",
			"Hawaiian Shirt",
			"Leather Jacket",
			"Dirty Tank Top"
		]
	},
	{
		question: "What is the name of the hormone that is released in large amounts during sex and leads to feelings of attachment and bonding?",
		answer: "🤗 Oxytocin",
		options: [
			"💊 Endorphins",
			"🧠 Dopamine",
			"🤗 Oxytocin",
			"😌 Serotonin"
		]
	},
	{
		question: "What is the term used to describe the process of falling out of love?",
		answer: "💔 Desensitization",
		options: [
			"💔 Desensitization",
			"💭 Disillusionment",
			"🤕 Heartbreak",
			"🙅‍♀️ Disenchantment"
		]
	},
	{
		question: "What is the term used to describe a romantic attraction to someone of the same gender?",
		answer: "👭 Homosexuality",
		options: [
			"👬 Heterosexuality",
			"👭 Homosexuality",
			"👫 Bisexuality",
			"🧔🏻 Metrosexuality"
		]
	},
	{
		question: "What is the scientific term for the 'butterflies' feeling in your stomach when you're in love?",
		answer: "💘 Limerence",
		options: [
			"💕 Lovebug",
			"🦋 Butterflying",
			"🤩 Infatuation",
			"💘 Limerence"
		]
	},
	{
		question: "What is the name for the fear of falling in love?",
		answer: "🕵️‍♀️ Philophobia",
		options: [
			"😱 Lovepanic",
			"👻 Ghosting",
			"🚫 Loveloss",
			"🕵️‍♀️ Philophobia"
		]
	},
	{
		question: "Which famous romantic couple was known as 'Bonnie and Clyde'?",
		answer: "Clyde Barrow and Bonnie Parker",
		options: [
			"Romeo and Juliet",
			"Brad Pitt and Angelina Jolie",
			"Clyde Barrow and Bonnie Parker",
			"King Edward VIII and Wallis Simpson"
		]
	},
	{
		question: "What is the name of the Greek god of love?",
		answer: "Eros",
		options: [
			"Zeus",
			"Apollo",
			"Ares",
			"Eros"
		]
	},
	{
		question: "What is the name of the Roman goddess of love?",
		answer: "Venus",
		options: [
			"Juno",
			"Minerva",
			"Vesta",
			"Venus"
		]
	},
	{
		question: "What is the name of the popular dating app ❤️ that allows users to swipe left or right to indicate interest in a potential match?",
		answer: "Tinder",
		options: [
			"Bumble",
			"Grindr",
			"OkCupid",
			"Tinder"
		]
	},
	{
		question: "What is the name of the 2013 romantic drama film directed by Spike Jonze, about a man who falls in love with his computer's operating system?",
		answer: "Her",
		options: [
			"Love Actually",
			"The Notebook",
			"500 Days of Summer",
			"Her"
		]
	},
	{
		question: "What popular acronym is often used to express love or affection in text messages and social media?",
		answer: "ILY (I Love You)",
		options: [
			"TBH (To Be Honest)",
			"ICYMI (In Case You Missed It)",
			"LOL (Laugh Out Loud)",
			"ILY (I Love You)"
		]
	},
	{
		question: "What emoji is often used to represent love or romantic feelings?",
		answer: "❤️",
		options: [
			"😂",
			"🤔",
			"😍",
			"❤️"
		]
	},
	{
		question: "What is the name of the popular 2004 romantic comedy film about a man who falls in love with a woman who has short-term memory loss?",
		answer: "50 First Dates",
		options: [
			"The Notebook",
			"10 Things I Hate About You",
			"50 First Dates",
			"Crazy, Stupid, Love."
		]
	},
	{
		question: "What is the name of the popular dating app that features a yellow flame logo and allows users to send disappearing messages to potential matches?",
		answer: "Bumble",
		options: [
			"Hinge",
			"Tinder",
			"Bumble",
			"OkCupid"
		]
	},
	{
		question: "What is the name of the popular love song by Ed Sheeran that features the lyrics 'We found love right where we are'?",
		answer: "Thinking Out Loud",
		options: [
			"Shape of You",
			"Photograph",
			"Perfect",
			"Thinking Out Loud"
		]
	},
	{
		question: "🎥 Which movie won the Best Picture award at the 2021 Oscars?",
		answer: "Nomadland",
		options: ["The Trial of the Chicago 7", "Promising Young Woman", "Minari", "Nomadland"]
	},
	{
		question: "📚 Who wrote the novel 'To Kill a Mockingbird'?",
		answer: "Harper Lee",
		options: ["Harper Lee", "John Steinbeck", "Ernest Hemingway", "F. Scott Fitzgerald"]
	},
	{
		question: "🏆 Who is the most decorated Olympian of all time?",
		answer: "Michael Phelps",
		options: ["Usain Bolt", "Simone Biles", "Michael Phelps", "Carl Lewis"]
	},
	{
		question: "🚀 What was the name of the first satellite launched into orbit?",
		answer: "Sputnik 1",
		options: ["Apollo 11", "Vostok 1", "Explorer 1", "Sputnik 1"]
	},
	{
		question: "🍔 What fast food chain has the most locations worldwide?",
		answer: "Subway",
		options: ["McDonald's", "Burger King", "Subway", "KFC"]
	},
	{
		question: "🎼 Who composed the 'Moonlight Sonata'?",
		answer: "Ludwig van Beethoven",
		options: ["Wolfgang Amadeus Mozart", "Ludwig van Beethoven", "Johann Sebastian Bach", "Franz Schubert"]
	},
	{
		question: "🎭 Who wrote the play 'Romeo and Juliet'?",
		answer: "William Shakespeare",
		options: ["Oscar Wilde", "Tennessee Williams", "Samuel Beckett", "William Shakespeare"]
	},
	{
		question: "👑 Who is the current queen of the United Kingdom?",
		answer: "Queen Elizabeth II",
		options: ["Queen Elizabeth II", "Queen Victoria", "Queen Anne", "Queen Mary"]
	},
	{
		question: "🎮 What is the best-selling video game of all time?",
		answer: "Minecraft",
		options: ["Grand Theft Auto V", "Minecraft", "Tetris", "Wii Sports"]
	},
	{
		question: "👨‍💻 Who is the CEO of Tesla?",
		answer: "Elon Musk",
		options: ["Bill Gates", "Mark Zuckerberg", "Jeff Bezos", "Elon Musk"]
	},
	{
		question: "What does the heart with an arrow emoji mean?",
		answer: "Cupid's arrow hitting two hearts, representing falling in love",
		options: [
			"A broken heart",
			"A heart attack",
			"Cupid's arrow hitting two hearts, representing falling in love",
			"A heart with a keyhole, representing the search for true love"
		]
	},
	{
		question: "What does the red heart emoji mean?",
		answer: "Love, passion, or romance",
		options: [
			"Anger",
			"Sadness",
			"Love, passion, or romance",
			"Excitement"
		]
	},
	{
		question: "What emoji represents a bouquet of flowers?",
		answer: "💐",
		options: [
			"🌺",
			"🌻",
			"🌷",
			"💐"
		]
	},
	{
		question: "What emoji represents a love letter?",
		answer: "💌",
		options: [
			"📝",
			"📜",
			"📄",
			"💌"
		]
	},
	{
		question: "What emoji represents a wedding?",
		answer: "💒",
		options: [
			"🎉",
			"💍",
			"👰",
			"💒"
		]
	},
	{
		question: "What does the rose emoji symbolize?",
		answer: "Love, passion, or gratitude",
		options: [
			"Anger",
			"Sadness",
			"Love, passion, or gratitude",
			"Excitement"
		]
	},
	{
		question: "What emoji represents a romantic dinner?",
		answer: "🍷🕯️🍝",
		options: [
			"🍔🍟",
			"🍕🍺",
			"🍷🕯️🍝",
			"🍩🍦"
		]
	},
	{
		question: "What does the heart eyes emoji mean?",
		answer: "Love or admiration",
		options: [
			"Excitement",
			"Disgust",
			"Love or admiration",
			"Sadness"
		]
	},
	{
		question: "What does the 💌 emoji represent?",
		answer: "A love letter or note",
		options: [
			"An email",
			"A text message",
			"A love letter or note",
			"A memo"
		]
	},
	{
		question: "What does the 💍 emoji represent?",
		answer: "An engagement or wedding ring",
		options: [
			"A bracelet",
			"A necklace",
			"An engagement or wedding ring",
			"A watch"
		]
	},
	{
		question: "What does the 🌹 emoji represent?",
		answer: "A red rose, symbolizing love or romance",
		options: [
			"A daisy",
			"A sunflower",
			"A red rose, symbolizing love or romance",
			"A tulip"
		]
	},
	{
		question: "What does the 😍 emoji represent?",
		answer: "Love or infatuation, often used to express admiration or attraction",
		options: [
			"Anger",
			"Disgust",
			"Love or infatuation, often used to express admiration or attraction",
			"Sadness"
		]
	},
	{
		question: "What does the 💘 emoji represent?",
		answer: "Love or a heart with a bow and arrow",
		options: [
			"Heartbreak",
			"Anger",
			"Love or a heart with a bow and arrow",
			"Excitement"
		]
	},
	{
		question: "What does the 💕 emoji represent?",
		answer: "Two hearts, usually indicating a romantic attraction",
		options: [
			"Sadness",
			"Envy",
			"Two hearts, usually indicating a romantic attraction",
			"Anger"
		]
	},
	{
		question: "What does the 💖 emoji represent?",
		answer: "Sparkling heart, indicating love or admiration",
		options: [
			"Broken heart",
			"Anger",
			"Sparkling heart, indicating love or admiration",
			"Excitement"
		]
	},
	{
		question: "What is the name of the longest war in U.S. history, which lasted from 2001 to 2021?",
		answer: "War in Afghanistan",
		options: [
			"World War II",
			"Korean War",
			"War in Afghanistan",
			"Gulf War"
		]
	},
	{
		question: "What was the code name for the Allied invasion of Normandy during World War II?",
		answer: "D-Day",
		options: [
			"Operation Overlord",
			"Battle of the Bulge",
			"D-Day",
			"Operation Barbarossa"
		]
	},
	{
		question: "What was the name of the conflict that took place between 1955 and 1975 in Southeast Asia?",
		answer: "Vietnam War",
		options: [
			"Gulf War",
			"World War I",
			"Vietnam War",
			"Korean War"
		]
	},
	{
		question: "What was the name of the battle in which U.S. forces dropped an atomic bomb on the Japanese city of Hiroshima?",
		answer: "Atomic Bombing of Hiroshima",
		options: [
			"Battle of Iwo Jima",
			"Battle of Midway",
			"Atomic Bombing of Hiroshima",
			"Battle of Okinawa"
		]
	},
	{
		question: "What was the name of the German military strategy during World War II that involved a lightning-fast attack using a concentrated force of tanks and aircraft?",
		answer: "Blitzkrieg",
		options: [
			"Final Solution",
			"Blitzkrieg",
			"Schlieffen Plan",
			"Operation Barbarossa"
		]
	},
	{
		question: "What was the name of the treaty that ended World War I?",
		answer: "Treaty of Versailles",
		options: [
			"Treaty of Paris",
			"Treaty of Versailles",
			"Treaty of Tordesillas",
			"Treaty of Brest-Litovsk"
		]
	},
	{
		question: "What was the name of the battle in which British and French forces successfully defended Paris against German invasion during World War I?",
		answer: "First Battle of the Marne",
		options: [
			"Battle of the Somme",
			"Battle of Verdun",
			"First Battle of the Marne",
			"Battle of Gallipoli"
		]
	},
	{
		question: "What was the name of the conflict that took place between 1939 and 1945, involving most of the world's major powers, including the Allied and Axis powers?",
		answer: "World War II",
		options: [
			"World War I",
			"Korean War",
			"Vietnam War",
			"World War II"
		]
	},
	{
		question: "What does the 💘 emoji represent?",
		answer: "Love or romance",
		options: [
			"Sadness",
			"Anger",
			"Excitement",
			"Love or romance"
		]
	},
	{
		question: "What does the 💔 emoji mean?",
		answer: "Heartbreak or disappointment",
		options: [
			"Joy",
			"Anger",
			"Love",
			"Heartbreak or disappointment"
		]
	},
	{
		question: "What does the 💕 emoji symbolize?",
		answer: "Two hearts in love",
		options: [
			"Sadness",
			"Anger",
			"Friendship",
			"Two hearts in love"
		]
	},
	{
		question: "What does the 💖 emoji represent?",
		answer: "Sparkling heart, usually used to express love or admiration",
		options: [
			"Sadness",
			"Anger",
			"Friendship",
			"Sparkling heart, usually used to express love or admiration"
		]
	},
	{
		question: "What does the 💗 emoji mean?",
		answer: "Affection or love towards someone or something",
		options: [
			"Disgust",
			"Anger",
			"Joy",
			"Affection or love towards someone or something"
		]
	},
	{
		question: "What does the 💞 emoji symbolize?",
		answer: "Two hearts wrapped around each other, used to express love or affection",
		options: [
			"Sadness",
			"Anger",
			"Joy",
			"Two hearts wrapped around each other, used to express love or affection"
		]
	},
	{
		question: "What does the 💓 emoji represent?",
		answer: "Beating heart, usually used to express love or affection",
		options: [
			"Sadness",
			"Anger",
			"Joy",
			"Beating heart, usually used to express love or affection"
		]
	},
	{
		question: "What does the ❤️ emoji mean?",
		answer: "Red heart, used to express love or romance",
		options: [
			"Sadness",
			"Anger",
			"Joy",
			"Red heart, used to express love or romance"
		]
	},
	{
		question: "What does the 💣 emoji represent?",
		answer: "A bomb or explosive",
		options: [
			"A thunderstorm",
			"A cannon",
			"A bomb or explosive"
		]
	},
	{
		question: "What does the 🗡️ emoji represent?",
		answer: "A sword",
		options: [
			"A gun",
			"A bow and arrow",
			"A sword"
		]
	},
	{
		question: "What does the 🛡️ emoji represent?",
		answer: "A shield",
		options: [
			"A helmet",
			"A breastplate",
			"A shield"
		]
	},
	{
		question: "What does the 🔪 emoji represent?",
		answer: "A kitchen knife or other sharp cutting tool",
		options: [
			"A sword",
			"A machete",
			"A kitchen knife or other sharp cutting tool"
		]
	},
	{
		question: "What does the 💂 emoji represent?",
		answer: "A British palace guard",
		options: [
			"A police officer",
			"A firefighter",
			"A British palace guard"
		]
	},
	{
		question: "What does the 🚀 emoji represent?",
		answer: "A rocket",
		options: [
			"A car",
			"A train",
			"A rocket"
		]
	},
	{
		question: "What does the 🛸 emoji represent?",
		answer: "A flying saucer or UFO",
		options: [
			"A bird",
			"A helicopter",
			"A flying saucer or UFO"
		]
	},
	{
		question: "What does the 💥 emoji represent?",
		answer: "An explosion",
		options: [
			"A fireworks display",
			"A shooting star",
			"An explosion"
		]
	},
	{
		question: "What does the 💣 emoji represent?",
		answer: "Explosive, dangerous, or potentially harmful",
		options: [
			"Fire",
			"Water",
			"Explosive, dangerous, or potentially harmful",
			"Food"
		]
	},
	{
		question: "What does the 🪖 emoji represent?",
		answer: "A soldier or military personnel",
		options: [
			"A chef",
			"A construction worker",
			"A police officer",
			"A soldier or military personnel"
		]
	},
	{
		question: "What does the 🗡️ emoji represent?",
		answer: "A sword or weapon",
		options: [
			"A pen",
			"A flashlight",
			"A key",
			"A sword or weapon"
		]
	},
	{
		question: "What does the 🛡️ emoji represent?",
		answer: "A shield or protection",
		options: [
			"A book",
			"A hat",
			"A flower",
			"A shield or protection"
		]
	},
	{
		question: "What does the 💂‍♂️ emoji represent?",
		answer: "A British guard or soldier",
		options: [
			"A firefighter",
			"A pilot",
			"A chef",
			"A British guard or soldier"
		]
	},
	{
		question: "What does the ⚔️ emoji represent?",
		answer: "A crossed swords or battle",
		options: [
			"A handshake",
			"A hug",
			"A high five",
			"A crossed swords or battle"
		]
	},
	{
		question: "What does the 🏹 emoji represent?",
		answer: "A bow and arrow",
		options: [
			"A gun",
			"A knife",
			"A hammer",
			"A bow and arrow"
		]
	},
	{
		question: "What does the 🎖️ emoji represent?",
		answer: "A military medal or honor",
		options: [
			"A trophy",
			"A necklace",
			"A bracelet",
			"A military medal or honor"
		]
	},
	{
		question: "What is the most common rifle used by the US military?",
		answer: "🔫 M16 rifle",
		options: [
			"🔫 AK-47",
			"🔫 M16 rifle",
			"🔫 FN SCAR",
			"🔫 AR-15"
		]
	},
	{
		question: "What was the largest naval battle in history?",
		answer: "🛳️ Battle of Leyte Gulf",
		options: [
			"🛳️ Battle of Midway",
			"🛳️ Battle of Jutland",
			"🛳️ Battle of Leyte Gulf",
			"🛳️ Battle of Tsushima"
		]
	},
	{
		question: "What is the name of the largest non-nuclear bomb ever used in combat?",
		answer: "💣 Massive Ordnance Air Blast (MOAB) bomb",
		options: [
			"💣 Daisy Cutter bomb",
			"💣 Tomahawk missile",
			"💣 Hellfire missile",
			"💣 Massive Ordnance Air Blast (MOAB) bomb"
		]
	},
	{
		question: "What is the highest military rank in the United States?",
		answer: "🎖️ General of the Army",
		options: [
			"🎖️ Admiral of the Fleet",
			"🎖️ General of the Army",
			"🎖️ Marshal of the Air Force",
			"🎖️ Sergeant Major of the Army"
		]
	},
	{
		question: "What is the name of the US military's special operations force?",
		answer: "👥 Navy SEALs",
		options: [
			"👥 Army Rangers",
			"👥 Marine Force Recon",
			"👥 Air Force Pararescue",
			"👥 Navy SEALs"
		]
	},
	{
		question: "What was the deadliest conflict in human history?",
		answer: "💀 World War II",
		options: [
			"💀 World War I",
			"💀 Korean War",
			"💀 Vietnam War",
			"💀 World War II"
		]
	},
	{
		question: "What was the name of the US-led military operation that overthrew Saddam Hussein in Iraq?",
		answer: "⚔️ Operation Iraqi Freedom",
		options: [
			"⚔️ Operation Desert Storm",
			"⚔️ Operation Enduring Freedom",
			"⚔️ Operation New Dawn",
			"⚔️ Operation Iraqi Freedom"
		]
	},
	{
		question: "What is the name of the US military academy?",
		answer: "🎓 United States Military Academy (West Point)",
		options: [
			"🎓 United States Naval Academy (Annapolis)",
			"🎓 United States Air Force Academy",
			"🎓 United States Coast Guard Academy",
			"🎓 United States Military Academy (West Point)"
		]
	},
	{
		question: "What is a firewall in computer networking?",
		answer: "🔥🧱 A security system that monitors and controls incoming and outgoing network traffic",
		options: [
			"🔌 A device that connects two or more networks together",
			"🔥🧱 A security system that monitors and controls incoming and outgoing network traffic",
			"💽 A data storage device",
			"📡 A wireless access point"
		]
	},
	{
		question: "What is an IP address?",
		answer: "🌐🔢 A unique numerical identifier assigned to each device connected to a computer network",
		options: [
			"🗝️ A password used to authenticate users",
			"📧 An email address",
			"🌐🔢 A unique numerical identifier assigned to each device connected to a computer network",
			"📝 A note-taking app"
		]
	},
	{
		question: "What is a router?",
		answer: "📡🛣️ A networking device that forwards data packets between computer networks",
		options: [
			"🖥️ A device that displays output from a computer",
			"🎮 A gaming console",
			"📡🛣️ A networking device that forwards data packets between computer networks",
			"📠 A fax machine"
		]
	},
	{
		question: "What is a VPN?",
		answer: "🔒🌐 A virtual private network that provides a secure connection between remote computers",
		options: [
			"🖥️ A desktop computer",
			"🔒🌐 A virtual private network that provides a secure connection between remote computers",
			"📶 A wireless signal booster",
			"📡 A satellite dish"
		]
	},
	{
		question: "What is a modem?",
		answer: "📡📶 A device that converts digital signals into analog signals and vice versa to enable communication over a telephone line",
		options: [
			"🎶 A music player",
			"📡📶 A device that converts digital signals into analog signals and vice versa to enable communication over a telephone line",
			"📚 An e-book reader",
			"📠 A fax machine"
		]
	},
	{
		question: "What is a switch in computer networking?",
		answer: "🌐🔄 A device that connects multiple devices together in a network and forwards data between them",
		options: [
			"🔋 A device that stores electrical energy",
			"🖨️ A printer",
			"🌐🔄 A device that connects multiple devices together in a network and forwards data between them",
			"🖥️ A desktop computer"
		]
	},
	{
		question: "What does the 💣 emoji represent?",
		answer: "Explosives, bombs, or something that is 'the bomb'",
		options: [
			"Thunder",
			"Explosives, bombs, or something that is 'the bomb'",
			"Mushrooms",
			"Angry face"
		]
	},
	{
		question: "What does the 🏹 emoji represent?",
		answer: "A bow and arrow",
		options: [
			"A dart",
			"A fishing pole",
			"A bow and arrow",
			"A slingshot"
		]
	},
	{
		question: "What does the 🗡️ emoji represent?",
		answer: "A sword",
		options: [
			"A knife",
			"A wand",
			"A sword",
			"A spear"
		]
	},
	{
		question: "What does the 🔪 emoji represent?",
		answer: "A kitchen knife or a stabbing motion",
		options: [
			"A sword",
			"A kitchen knife or a stabbing motion",
			"A saw",
			"A razor blade"
		]
	},
	{
		question: "What does the 💥 emoji represent?",
		answer: "A comic book-style explosion",
		options: [
			"A burst of energy",
			"A headache",
			"A comic book-style explosion",
			"A bright flash"
		]
	},
	{
		question: "What does the 🛡️ emoji represent?",
		answer: "A shield",
		options: [
			"A castle",
			"A helmet",
			"A shield",
			"A suit of armor"
		]
	},
	{
		question: "What does the 🔫 emoji represent?",
		answer: "A handgun or pistol",
		options: [
			"A rifle",
			"A water gun",
			"A handgun or pistol",
			"A toy gun"
		]
	},
	{
		question: "What does the ⚔️ emoji represent?",
		answer: "Two crossed swords",
		options: [
			"A duel",
			"A knife fight",
			"Two crossed swords",
			"A fencing match"
		]
	},
	{
		question: "What does the 💔 emoji represent in the movie 'The Fault in Our Stars'?",
		answer: "The heartbreak and emotional pain of Hazel and Gus' separation",
		options: [
			"The joy and happiness of Hazel and Gus' love story",
			"The sadness and regret of Hazel and Gus' missed opportunities",
			"The heartbreak and emotional pain of Hazel and Gus' separation"
		]
	},
	{
		question: "What is the name of the character played by Ryan Gosling in the movie 'The Notebook'?",
		answer: "Noah Calhoun",
		options: [
			"Jack Dawson",
			"Noah Calhoun",
			"Noah Hamilton",
			"Noah Adams"
		]
	},
	{
		question: "What is the name of the famous balcony scene in 'Romeo and Juliet'?",
		answer: "The Balcony Scene",
		options: [
			"The Love Scene",
			"The Kiss Scene",
			"The Balcony Scene",
			"The Secret Meeting Scene"
		]
	},
	{
		question: "What is the name of the movie that features the song 'My Heart Will Go On'?",
		answer: "Titanic",
		options: [
			"The Notebook",
			"The Fault in Our Stars",
			"A Walk to Remember",
			"Titanic"
		]
	},
	{
		question: "What is the name of the character played by Julia Roberts in the movie 'Pretty Woman'?",
		answer: "Vivian Ward",
		options: [
			"Vivian Banks",
			"Vivian Smith",
			"Vivian Green",
			"Vivian Ward"
		]
	},
	{
		question: "What is the name of the movie in which Emma Stone and Ryan Gosling play the lead roles?",
		answer: "La La Land",
		options: [
			"Crazy, Stupid, Love.",
			"The Notebook",
			"La La Land",
			"The Amazing Spider-Man"
		]
	},
	{
		question: "What is the name of the character played by Jennifer Grey in the movie 'Dirty Dancing'?",
		answer: "Frances 'Baby' Houseman",
		options: [
			"Samantha Baker",
			"Molly Jensen",
			"Frances 'Baby' Houseman",
			"Alex Owens"
		]
	},
	{
		question: "What is the name of the character played by Heath Ledger in the movie '10 Things I Hate About You'?",
		answer: "Patrick Verona",
		options: [
			"Cameron James",
			"Joey Donner",
			"Patrick Verona",
			"Michael Eckman"
		]
	},
	{
		question: "Which movie features a love story between a poor artist and a wealthy woman on the ill-fated RMS Titanic? 🚢💔",
		answer: "Titanic",
		options: ["The Notebook", "Gone with the Wind", "Titanic", "Pretty Woman"]
	},
	{
		question: "Which romantic comedy follows the love story of a bookstore owner and a movie star? 📚🎥💕",
		answer: "Notting Hill",
		options: ["10 Things I Hate About You", "The Proposal", "Notting Hill", "Crazy Rich Asians"]
	},
	{
		question: "Which classic movie is about a love affair between a wealthy woman and a poor writer, set against the backdrop of the sinking of the RMS Titanic? 🚢📝💔",
		answer: "A Night to Remember",
		options: ["The Great Gatsby", "A Night to Remember", "The English Patient", "Casablanca"]
	},
	{
		question: "Which romantic movie features a time-traveling protagonist who falls in love with a woman in the past? ⏰💕",
		answer: "The Time Traveler's Wife",
		options: ["The Lake House", "The Time Traveler's Wife", "About Time", "Midnight in Paris"]
	},
	{
		question: "Which movie tells the story of two young lovers from different social classes, set against the backdrop of the Civil War? ⚔️💕",
		answer: "Gone with the Wind",
		options: ["Romeo and Juliet", "The Fault in Our Stars", "The Notebook", "Gone with the Wind"]
	},
	{
		question: "Which romantic movie features a young couple who fall in love in Italy, but are later separated by circumstances beyond their control? 🇮🇹💕",
		answer: "Call Me by Your Name",
		options: ["The Fault in Our Stars", "A Walk to Remember", "The Before Trilogy", "Call Me by Your Name"]
	},
	{
		question: "Which movie is about a man who falls in love with a woman suffering from short-term memory loss? 🧠💕",
		answer: "50 First Dates",
		options: ["The Vow", "Eternal Sunshine of the Spotless Mind", "The Notebook", "50 First Dates"]
	},
	{
		question: "Which romantic comedy features a young woman who pretends to be engaged to a man she barely knows, only to fall in love with him for real? 💍💕",
		answer: "The Proposal",
		options: ["27 Dresses", "How to Lose a Guy in 10 Days", "The Proposal", "The Wedding Planner"]
	},
	{
		question: "Which novel features the love story of Heathcliff and Catherine?",
		answer: "Wuthering Heights by Emily Bronte 🏰🌬️",
		options: [
			"Pride and Prejudice by Jane Austen 🎩👒",
			"Sense and Sensibility by Jane Austen 🌺👩‍👧",
			"The Great Gatsby by F. Scott Fitzgerald 🍸🌃",
			"Wuthering Heights by Emily Bronte 🏰🌬️"
		]
	},
	{
		question: "Who is the author of the novel 'The Fault in Our Stars'?",
		answer: "John Green 📚🌟",
		options: [
			"Nicholas Sparks 💌🌹",
			"Sylvia Plath 🌸🐝",
			"John Green 📚🌟",
			"Jodi Picoult 📖❤️"
		]
	},
	{
		question: "Which novel tells the story of Noah and Allie, two lovers separated by social class?",
		answer: "The Notebook by Nicholas Sparks 📓🖋️",
		options: [
			"Pride and Prejudice by Jane Austen 🎩👒",
			"Romeo and Juliet by William Shakespeare 🌹💔",
			"The Notebook by Nicholas Sparks 📓🖋️",
			"A Walk to Remember by Nicholas Sparks 🚶‍♀️❤️"
		]
	},
	{
		question: "Which novel features the love story of Jamie and Claire, who fall in love during the Jacobite rising?",
		answer: "Outlander by Diana Gabaldon 🏰👩‍❤️‍👨",
		options: [
			"Jane Eyre by Charlotte Bronte 🌹🏰",
			"Outlander by Diana Gabaldon 🏰👩‍❤️‍👨",
			"Pride and Prejudice by Jane Austen 🎩👒",
			"Gone with the Wind by Margaret Mitchell 🌾🔥"
		]
	},
	{
		question: "What novel features the love story of Hazel and Augustus, two teenagers with cancer?",
		answer: "The Fault in Our Stars by John Green 📚🌟",
		options: [
			"The Time Traveler's Wife by Audrey Niffenegger ⏰👫",
			"The Notebook by Nicholas Sparks 📓🖋️",
			"The Fault in Our Stars by John Green 📚🌟",
			"Me Before You by Jojo Moyes 🦽❤️"
		]
	},
	{
		question: "What is the term used to describe someone who is afraid to express their feelings of love?",
		answer: "Philophobe 🥀",
		options: [
			"Romancephobe 💔",
			"Lovesick 🤒",
			"Philophobe 🥀",
			"Hopeless romantic 💕"
		]
	},
	{
		question: "What is the fear of saying 'I love you' called?",
		answer: "Philemaphobia 😰",
		options: [
			"Emetophobia 🤢",
			"Philemaphobia 😰",
			"Claustrophobia 🚪",
			"Philematophobia 😘"
		]
	},
	{
		question: "What is one way to help someone who is afraid to say 'I love you'?",
		answer: "Encourage them and give them time to express their feelings at their own pace ❤️",
		options: [
			"Force them to say it 😠",
			"Tease them for being scared 😂",
			"Ignore their feelings and move on 😒",
			"Encourage them and give them time to express their feelings at their own pace ❤️"
		]
	},
	{
		question: "Why do some people have a fear of saying 'I love you'?",
		answer: "They may have had a bad experience with love in the past, or they may be afraid of rejection or vulnerability 💔",
		options: [
			"They are selfish and don't want to commit to a relationship 😒",
			"They may have had a bad experience with love in the past, or they may be afraid of rejection or vulnerability 💔",
			"They don't believe in love or romance 🙅‍♂️",
			"They are waiting for the perfect moment or person 🤩"
		]
	},
	{
		question: "What is one way to show love without saying 'I love you'?",
		answer: "Actions speak louder than words - do something thoughtful or romantic ❤️🌹",
		options: [
			"Actions speak louder than words - do something thoughtful or romantic ❤️🌹",
			"Write a love letter 💌",
			"Sing a love song 🎤",
			"Give a meaningful gift 🎁"
		]
	},
	{
		question: "What is the fear of expressing love or saying 'I love you' called?",
		answer: "Philemaphobia",
		options: [
			"Hodophobia",
			"Philemaphobia",
			"Ergophobia",
			"Atychiphobia"
		]
	},
	{
		question: "What are some common reasons that people are afraid to say 'I love you'?",
		answer: "Fear of rejection, fear of vulnerability, past hurt or trauma, cultural or societal conditioning",
		options: [
			"Fear of spiders, fear of heights, fear of clowns, fear of failure",
			"Fear of rejection, fear of vulnerability, past hurt or trauma, cultural or societal conditioning",
			"Fear of success, fear of change, fear of commitment, fear of missing out",
			"Fear of public speaking, fear of flying, fear of enclosed spaces, fear of social situations"
		]
	},
	{
		question: "What can you do to overcome your fear of saying 'I love you'?",
		answer: "Communicate with your partner, work on building trust and intimacy, seek therapy if needed",
		options: [
			"Avoid the topic and hope it goes away, distract yourself with other things, pretend you don't have feelings",
			"Communicate with your partner, work on building trust and intimacy, seek therapy if needed",
			"Wait for your partner to say it first, play hard to get, give mixed signals",
			"Write a love letter or poem, express your feelings through art or music, use a romantic gesture instead of words"
		]
	},
	{
		question: "What are some alternative ways to express your love if you're afraid to say 'I love you'?",
		answer: "Acts of service, physical touch, quality time, gift giving",
		options: [
			"Criticism, indifference, distance, insults",
			"Acts of service, physical touch, quality time, gift giving",
			"Flirting with other people, playing games, lying, cheating",
			"Ignoring your partner, withholding affection, breaking promises, blaming others"
		]
	},
	{
		question: "What are some benefits of saying 'I love you'?",
		answer: "Increased intimacy, strengthened emotional connection, improved communication, heightened sense of security and trust",
		options: [
			"Increased conflict, decreased attraction, weakened emotional connection, ruined communication",
			"Increased intimacy, strengthened emotional connection, improved communication, heightened sense of security and trust",
			"Increased distance, heightened jealousy, worsened communication, feelings of isolation",
			"Increased anxiety, decreased self-esteem, worsened mental health, physical illness"
		]
	},
	{
		question: "What is the term used to describe someone who is afraid to say 'I love you'?",
		answer: "Philophobe",
		options: [
			"Aromantic",
			"Cynic",
			"Philophobe",
			"Commitment-phobe"
		]
	},
	{
		question: "What emoji can represent fear or anxiety about saying 'I love you'?",
		answer: "😬",
		options: [
			"😍",
			"😭",
			"😬",
			"😤"
		]
	},
	{
		question: "What is a common reason why people are afraid to say 'I love you'?",
		answer: "Fear of rejection",
		options: [
			"Fear of commitment",
			"Fear of vulnerability",
			"Fear of rejection",
			"Fear of losing independence"
		]
	},
	{
		question: "What emoji can represent the feeling of being overwhelmed when thinking about saying 'I love you'?",
		answer: "😰",
		options: [
			"😍",
			"😢",
			"😰",
			"😡"
		]
	},
	{
		question: "What is a strategy that people use to overcome their fear of saying 'I love you'?",
		answer: "Gradual exposure",
		options: [
			"Avoidance",
			"Distracting themselves",
			"Gradual exposure",
			"Pretending not to have feelings"
		]
	},
	{
		question: "What is a common sign that someone is afraid to say 'I love you'?",
		answer: "They avoid saying it or changing the subject when it comes up",
		options: [
			"They say 'I love you' all the time to compensate",
			"They try to make the other person say it first",
			"They avoid saying it or changing the subject when it comes up",
			"They only say it in public"
		]
	},
	{
		question: "What is a fear that may be behind someone's fear of saying 'I love you'?",
		answer: "Fear of vulnerability",
		options: [
			"Fear of intimacy",
			"Fear of commitment",
			"Fear of rejection",
			"Fear of vulnerability"
		]
	},
	{
		question: "What is a common experience that can trigger fear of saying 'I love you'?",
		answer: "Past rejection or heartbreak",
		options: [
			"Meeting the other person's family",
			"Going on a first date",
			"Having a fight",
			"Past rejection or heartbreak"
		]
	},
	{
		question: "What emoji can represent the feeling of being stuck in a cycle of fear and avoidance when it comes to saying 'I love you'?",
		answer: "🌀",
		options: [
			"❤️",
			"💔",
			"😔",
			"🌀"
		]
	},
	{
		question: "What is a technique someone can use to practice saying 'I love you'?",
		answer: "Role-playing with a friend or therapist",
		options: [
			"Writing it in a letter",
			"Saying it in their head",
			"Drinking alcohol to loosen up",
			"Role-playing with a friend or therapist"
		]
	},
	{
		question: "What is the term used to describe someone who is afraid to say 'I love you'?",
		answer: "Philophobe 😨",
		options: [
			"Aromantic 🌹",
			"Cynic 😒",
			"Philophobe 😨",
			"Commitment-phobe 💔"
		]
	},
	{
		question: "What emoji can represent fear or anxiety about saying 'I love you'?",
		answer: "😬",
		options: [
			"😍",
			"😭",
			"😬",
			"😤"
		]
	},
	{
		question: "What is a common reason why people are afraid to say 'I love you'?",
		answer: "Fear of rejection 😔",
		options: [
			"Fear of commitment 💍",
			"Fear of vulnerability 🙈",
			"Fear of rejection 😔",
			"Fear of losing independence 🏃‍♂️"
		]
	},
	{
		question: "What emoji can represent the feeling of being overwhelmed when thinking about saying 'I love you'?",
		answer: "😰",
		options: [
			"😍",
			"😢",
			"😰",
			"😡"
		]
	},
	{
		question: "What is a strategy that people use to overcome their fear of saying 'I love you'?",
		answer: "Gradual exposure 📈",
		options: [
			"Avoidance 🙅‍♂️",
			"Distracting themselves 📺",
			"Gradual exposure 📈",
			"Pretending not to have feelings 🤐"
		]
	},
	{
		question: "What is another term for the fear of saying 'I love you'?",
		answer: "Aphenphosmphobia 💔",
		options: [
			"Amoraphobia 😞",
			"Aphenphosmphobia 💔",
			"Emotophobia 😱",
			"Commitmentphobia 🏃‍♂️"
		]
	},
	{
		question: "What emoji can represent the feeling of relief after saying 'I love you'?",
		answer: "😌",
		options: [
			"😭",
			"😍",
			"😌",
			"😜"
		]
	},
	{
		question: "What is a common experience for someone with a fear of saying 'I love you'?",
		answer: "Avoiding intimate relationships 🚫❤️",
		options: [
			"Being overly affectionate 😘",
			"Expressing love through gifts 🎁",
			"Avoiding intimate relationships 🚫❤️",
			"Having frequent crushes 💘"
		]
	},
	{
		question: "What is a common sign that someone is afraid to say 'I love you'?",
		answer: "They avoid saying it or changing the subject when it comes up 🙊",
		options: [
			"They say 'I love you' all the time to compensate 😘",
			"They try to make the other person say it first 🤔",
			"They avoid saying it or changing the subject when it comes up 🙊",
			"They only say it in public 🗣️"
		]
	},
	{
		question: "What is a fear that may be behind someone's fear of saying 'I love you'?",
		answer: "Fear of vulnerability 😨",
		options: [
			"Fear of intimacy 😳",
			"Fear of commitment 💍",
			"Fear of rejection 😔",
			"Fear of vulnerability 😨"
		]
	},
	{
		question: "What is a common experience that can trigger fear of saying 'I love you'?",
		answer: "Past rejection or heartbreak 💔",
		options: [
			"Meeting the other person's family 👨‍👩‍👧‍👦",
			"Going on a first date 🥰",
			"Having a fight 😡",
			"Past rejection or heartbreak 💔"
		]
	},
	{
		question: "What emoji can represent the feeling of being stuck in a cycle of fear and avoidance when it comes to saying 'I love you'?",
		answer: "🌀",
		options: [
			"❤️",
			"💔",
			"😔",
			"🌀"
		]
	},
	{
		question: "What is a technique someone can use to practice saying 'I love you'?",
		answer: "Role-playing with a friend or therapist 🎭",
		options: [
			"Writing it in a letter 📝",
			"Saying it in their head 💭",
			"Drinking alcohol to loosen up 🍺",
			"Role-playing with a friend or therapist 🎭"
		]
	},
	{
		question: "What does the 💌 emoji represent?",
		answer: "Love letter or envelope, used to express love or affection",
		options: [
			"Sadness",
			"Anger",
			"Joy",
			"Love letter or envelope, used to express love or affection"
		]
	},
	{
		question: "What does the 💍 emoji mean?",
		answer: "Ring, often used to represent marriage or engagement",
		options: [
			"Sadness",
			"Anger",
			"Joy",
			"Ring, often used to represent marriage or engagement"
		]
	},
	{
		question: "What does the 🥰 emoji symbolize?",
		answer: "Smiling face with hearts, used to express love, affection or gratitude",
		options: [
			"Sadness",
			"Anger",
			"Joy",
			"Smiling face with hearts, used to express love, affection or gratitude"
		]
	},
	{
		question: "What does the 💏 emoji represent?",
		answer: "Kissing couple, used to represent romance or affection",
		options: [
			"Sadness",
			"Anger",
			"Joy",
			"Kissing couple, used to represent romance or affection"
		]
	},
	{
		question: "What does the 💑 emoji mean?",
		answer: "Couple with heart, used to represent love or a relationship",
		options: [
			"Sadness",
			"Anger",
			"Joy",
			"Couple with heart, used to represent love or a relationship"
		]
	},
	{
		question: "🎵 What is the name of the singer who released the hit song 'Hello' in 2015?",
		answer: "🎵 Adele",
		options: [
			"🎵 Adele",
			"🎵 Beyoncé",
			"🎵 Taylor Swift",
			"🎵 Katy Perry"
		]
	},
	{
		question: "🏆 Who won the 2021 UEFA Champions League?",
		answer: "🏆 Chelsea",
		options: [
			"🏆 Manchester City",
			"🏆 Real Madrid",
			"🏆 Bayern Munich",
			"🏆 Chelsea"
		]
	},
	{
		question: "🌍 What is the smallest country in the world by land area?",
		answer: "🌍 Vatican City",
		options: [
			"🌍 Monaco",
			"🌍 Nauru",
			"🌍 San Marino",
			"🌍 Vatican City"
		]
	},
	{
		question: "🎞️ What is the highest-rated TV series on IMDb as of 2023?",
		answer: "🎞️ Breaking Bad",
		options: [
			"🎞️ The Sopranos",
			"🎞️ Game of Thrones",
			"🎞️ Breaking Bad",
			"🎞️ Friends"
		]
	},
	{
		question: "🏠 What is the name of the famous street in San Francisco known for its steep hills and cable cars?",
		answer: "🏠 Lombard Street",
		options: [
			"🏠 Rodeo Drive",
			"🏠 Bourbon Street",
			"🏠 Hollywood Boulevard",
			"🏠 Lombard Street"
		]
	},
	{
		question: "📺 Who was the original host of the TV game show 'Jeopardy!'?",
		answer: "📺 Art Fleming",
		options: [
			"📺 Alex Trebek",
			"📺 Chuck Woolery",
			"📺 Pat Sajak",
			"📺 Art Fleming"
		]
	},
	{
		question: "🎵 What is the name of the song that became the first video to reach one billion views on YouTube?",
		answer: "🎵 Gangnam Style",
		options: [
			"🎵 Baby Shark Dance",
			"🎵 Despacito",
			"🎵 See You Again",
			"🎵 Gangnam Style"
		]
	},
	{
		question: "🎭 Who won the Academy Award for Best Actor in a Leading Role in 2021?",
		answer: "🎭 Anthony Hopkins",
		options: [
			"🎭 Jackie Chan",
			"🎭 Chadwick Boseman",
			"🎭 Anthony Hopkins",
			"🎭 Gary Oldman"
		]
	},
	{
		question: "🔍 In the movie 'The Matrix', what is the name of the main character played by Keanu Reeves?",
		answer: "🔍 Neo",
		options: [
			"🔍 Morpheus",
			"🔍 Trinity",
			"🔍 Neo",
			"🔍 Agent Smith"
		]
	},
	{
		question: "📚 What is the name of the 1951 novel by J.D. Salinger?",
		answer: "📚 The Catcher in the Rye",
		options: [
			"📚 To Kill a Mockingbird",
			"📚 The Great Gatsby",
			"📚 The Catcher in the Rye",
			"📚 1984"
		]
	},
	{
		question: "🌌 What is the name of the galaxy that contains our solar system?",
		answer: "🌌 Milky Way",
		options: [
			"🌌 Andromeda",
			"🌌 Triangulum",
			"🌌 Milky Way",
			"🌌 Pinwheel"
		]
	},
	{
		question: "🗽 What is the name of the famous statue in New York Harbor that represents freedom and democracy?",
		answer: "🗽 Statue of Liberty",
		options: [
			"🗽 Liberty Bell",
			"🗽 Washington Monument",
			"🗽 Mount Rushmore",
			"🗽 Statue of Liberty"
		]
	},
	{
		question: "🎞️ What is the name of the famous movie that features Tom Hanks as a man stranded on a deserted island?",
		answer: "🎞️ Cast Away",
		options: [
			"🎞️ Forrest Gump",
			"🎞️ Saving Private Ryan",
			"🎞️ A League of Their Own",
			"🎞️ Cast Away"
		]
	},
	{
		question: "🔬 What is the name of the smallest particle that makes up all matter?",
		answer: "🔬 Atom",
		options: [
			"🔬 Electron",
			"🔬 Proton",
			"🔬 Neutron",
			"🔬 Atom"
		]
	},
	{
		question: "🎨 Who painted the famous work 'The Starry Night'?",
		answer: "🎨 Vincent van Gogh",
		options: [
			"🎨 Leonardo da Vinci",
			"🎨 Michelangelo",
			"🎨 Vincent van Gogh",
			"🎨 Pablo Picasso"
		]
	},
	{
		question: "👑 Who was the first queen of England?",
		answer: "👑 Mary I",
		options: [
			"👑 Elizabeth I",
			"👑 Mary I",
			"👑 Victoria",
			"👑 Anne"
		]
	},
	{
		question: "🌊 What is the name of the largest ocean on Earth?",
		answer: "🌊 Pacific Ocean",
		options: [
			"🌊 Atlantic Ocean",
			"🌊 Indian Ocean",
			"🌊 Southern Ocean",
			"🌊 Pacific Ocean"
		]
	},
	{
		question: "🎭 Who wrote the famous play 'Hamlet'?",
		answer: "🎭 William Shakespeare",
		options: [
			"🎭 Christopher Marlowe",
			"🎭 William Wordsworth",
			"🎭 Samuel Beckett",
			"🎭 William Shakespeare"
		]
	},
	{
		question: "🗽 In what year did the United States declare independence from Great Britain?",
		answer: "🗽 1776",
		options: [
			"🗽 1789",
			"🗽 1776",
			"🗽 1791",
			"🗽 1765"
		]
	},
	{
		question: "👑 Who is the longest-reigning monarch in British history?",
		answer: "👑 Queen Elizabeth II",
		options: [
			"👑 Queen Victoria",
			"👑 King George III",
			"👑 King Henry VIII",
			"👑 Queen Elizabeth II"
		]
	},
	{
		question: "🎥 What is the highest-grossing movie of all time (as of 2023)?",
		answer: "🎥 Avatar",
		options: [
			"🎥 Avengers: Endgame",
			"🎥 Titanic",
			"🎥 Avatar",
			"🎥 Star Wars: The Force Awakens"
		]
	},
	{
		question: "👽 In the science fiction movie 'Alien', what is the name of the spaceship?",
		answer: "👽 Nostromo",
		options: [
			"👽 Prometheus",
			"👽 Enterprise",
			"👽 Nostromo",
			"👽 Discovery"
		]
	},
	{
		question: "🎤 Who sang the hit song 'Thriller'?",
		answer: "🎤 Michael Jackson",
		options: [
			"🎤 Madonna",
			"🎤 Prince",
			"🎤 Michael Jackson",
			"🎤 Whitney Houston"
		]
	},
	{
		question: "🏰 In what year was the famous castle 'Neuschwanstein' in Germany built?",
		answer: "🏰 1869",
		options: [
			"🏰 1732",
			"🏰 1825",
			"🏰 1869",
			"🏰 1905"
		]
	},
	{
		question: "🚀 What is the name of the first artificial satellite to be put into orbit?",
		answer: "🚀 Sputnik 1",
		options: [
			"🚀 Vanguard 1",
			"🚀 Explorer 1",
			"🚀 Telstar 1",
			"🚀 Sputnik 1"
		]
	},
	{
		question: "📚 In what novel by F. Scott Fitzgerald would you find the character of Jay Gatsby?",
		answer: "📚 The Great Gatsby",
		options: [
			"📚 The Catcher in the Rye",
			"📚 To Kill a Mockingbird",
			"📚 The Great Gatsby",
			"📚 Catch-22"
		]
	},
	{
		question: "🦖 What is the name of the largest known dinosaur?",
		answer: "🦖 Argentinosaurus",
		options: [
			"🦖 Tyrannosaurus Rex",
			"🦖 Brachiosaurus",
			"🦖 Argentinosaurus",
			"🦖 Stegosaurus"
		]
	},
	{
		question: "🔬 What is the smallest unit of life?",
		answer: "🔬 Cell",
		options: [
			"🔬 Atom",
			"🔬 Molecule",
			"🔬 Cell",
			"🔬 Virus"
		]
	},
	{
		question: "🐉 What is the name of the hobbit in 'The Lord of the Rings' who is entrusted with the One Ring?",
		answer: "🐉 Frodo Baggins",
		options: [
			"🐉 Bilbo Baggins",
			"🐉 Samwise Gamgee",
			"🐉 Frodo Baggins",
			"🐉 Merry Brandybuck"
		]
	},
	{
		question: "🎨 Who painted the famous work 'The Persistence of Memory'?",
		answer: "🎨 Salvador Dalí",
		options: [
			"🎨 Vincent van Gogh",
			"🎨 Pablo Picasso",
			"🎨 Michelangelo",
			"🎨 Salvador Dalí"
		]
	},
	{
		question: "🎭 Who played the character of Walter White in the TV series 'Breaking Bad'?",
		answer: "🎭 Bryan Cranston",
		options: [
			"🎭 Aaron Paul",
			"🎭 Bryan Cranston",
			"🎭 Bob Odenkirk",
			"🎭 Giancarlo Esposito"
		]
	},
	{
		question: "🗿 What is the name of the famous statue on Easter Island?",
		answer: "🗿 Moai",
		options: [
			"🗿 Colossus",
			"🗿 Sphinx",
			"🗿 Moai",
			"🗿 David"
		]
	},
	{
		question: "🌍 What is the largest country by land area?",
		answer: "🌍 Russia",
		options: [
			"🌍 China",
			"🌍 United States",
			"🌍 Canada",
			"🌍 Russia"
		]
	},
	{
		question: "🎮 In what year was the video game 'Tetris' first released?",
		answer: "🎮 1984",
		options: [
			"🎮 1978",
			"🎮 1984",
			"🎮 1990",
			"🎮 1995"
		]
	},
	{
		question: "🎥 Who played the character of Jules Winnfield in the movie 'Pulp Fiction'?",
		answer: "🎥 Samuel L. Jackson",
		options: [
			"🎥 Samuel L. Jackson",
			"🎥 John Travolta",
			"🎥 Bruce Willis",
			"🎥 Uma Thurman"
		]
	},
	{
		question: "🗿 What is the name of the statue in Rio de Janeiro, Brazil that is one of the most famous landmarks in the world?",
		answer: "🗿 Christ the Redeemer",
		options: [
			"🗿 Christ the Redeemer",
			"🗿 The Colossus of Rhodes",
			"🗿 The Great Sphinx of Giza",
			"🗿 The Statue of Liberty"
		]
	},
	{
		question: "🏆 Who won the 2021 NBA Championship?",
		answer: "🏆 Milwaukee Bucks",
		options: [
			"🏆 Brooklyn Nets",
			"🏆 Phoenix Suns",
			"🏆 Los Angeles Lakers",
			"🏆 Milwaukee Bucks"
		]
	},
	{
		question: "🎬 What is the highest-grossing movie of all time (as of 2023)?",
		answer: "🎬 Avatar",
		options: [
			"🎬 Titanic",
			"🎬 Avengers: Endgame",
			"🎬 Star Wars: The Force Awakens",
			"🎬 Avatar"
		]
	},
	{
		question: "🎵 What is the name of the band that released the album 'Appetite for Destruction' in 1987?",
		answer: "🎵 Guns N' Roses",
		options: [
			"🎵 AC/DC",
			"🎵 Metallica",
			"🎵 Guns N' Roses",
			"🎵 Nirvana"
		]
	},
	{
		question: "🏅 Who won the most Olympic gold medals in history?",
		answer: "🏅 Michael Phelps",
		options: [
			"🏅 Usain Bolt",
			"🏅 Simone Biles",
			"🏅 Carl Lewis",
			"🏅 Michael Phelps"
		]
	},
	{
		question: "🎭 Who played the character of Hannibal Lecter in the movie 'The Silence of the Lambs'?",
		answer: "🎭 Anthony Hopkins",
		options: [
			"🎭 Anthony Hopkins",
			"🎭 Jack Nicholson",
			"🎭 Robert De Niro",
			"🎭 Al Pacino"
		]
	},
	{
		question: "🏛️ What is the capital of Australia?",
		answer: "🏛️ Canberra",
		options: [
			"🏛️ Sydney",
			"🏛️ Melbourne",
			"🏛️ Brisbane",
			"🏛️ Canberra"
		]
	},
	{
		question: "🎵 Who is often referred to as the 'Queen of Pop'?",
		answer: "🎵 Madonna",
		options: [
			"🎵 Madonna",
			"🎵 Beyoncé",
			"🎵 Taylor Swift",
			"🎵 Lady Gaga"
		]
	},
	{
		question: "🎭 In what year did the musical 'The Lion King' make its Broadway debut?",
		answer: "🎭 1997",
		options: [
			"🎭 1995",
			"🎭 1996",
			"🎭 1997",
			"🎭 1998"
		]
	},
	{
		question: "🏛️ What is the capital of Brazil?",
		answer: "🏛️ Brasília",
		options: [
			"🏛️ Rio de Janeiro",
			"🏛️ São Paulo",
			"🏛️ Brasília",
			"🏛️ Salvador"
		]
	},
	{
		question: "📚 Who wrote the classic novel 'Wuthering Heights'?",
		answer: "📚 Emily Bronte",
		options: [
			"📚 Jane Austen",
			"📚 Charlotte Bronte",
			"📚 Emily Bronte",
			"📚 Virginia Woolf"
		]
	},
	{
		question: "🎥 Who directed the 2014 movie 'Birdman'?",
		answer: "🎥 Alejandro G. Iñárritu",
		options: [
			"🎥 Christopher Nolan",
			"🎥 David Fincher",
			"🎥 Alejandro G. Iñárritu",
			"🎥 Martin Scorsese"
		]
	},
	{
		question: "🌊 What is the world's largest ocean?",
		answer: "🌊 Pacific Ocean",
		options: [
			"🌊 Indian Ocean",
			"🌊 Atlantic Ocean",
			"🌊 Arctic Ocean",
			"🌊 Pacific Ocean"
		]
	},
	{
		question: "🗼 What is the name of the famous tower in Paris?",
		answer: "🗼 Eiffel Tower",
		options: [
			"🗼 Eiffel Tower",
			"🗼 Leaning Tower of Pisa",
			"🗼 Tokyo Tower",
			"🗼 CN Tower"
		]
	},
	{
		question: "🎵 Who is the lead singer of the band U2?",
		answer: "🎵 Bono",
		options: [
			"🎵 Mick Jagger",
			"🎵 Freddie Mercury",
			"🎵 Bono",
			"🎵 Bruce Springsteen"
		]
	},
	{
		question: "🏟️ What is the name of the famous Roman amphitheater in Italy?",
		answer: "🏟️ Colosseum",
		options: [
			"🏟️ Pantheon",
			"🏟️ Colosseum",
			"🏟️ Vatican",
			"🏟️ Pompeii"
		]
	},
	{
		question: "🎭 What Shakespearean play is the phrase 'To be or not to be' from?",
		answer: "🎭 Hamlet",
		options: [
			"🎭 Romeo and Juliet",
			"🎭 Macbeth",
			"🎭 Hamlet",
			"🎭 Othello"
		]
	},
	{
		question: "🏛️ What is the capital of Australia?",
		answer: "🏛️ Canberra",
		options: [
			"🏛️ Sydney",
			"🏛️ Melbourne",
			"🏛️ Brisbane",
			"🏛️ Canberra"
		]
	},
	{
		question: "🎥 What is the highest-grossing movie of all time (as of 2023)?",
		answer: "🎥 Avatar",
		options: [
			"🎥 Avengers: Endgame",
			"🎥 Titanic",
			"🎥 Avatar",
			"🎥 Star Wars: The Force Awakens"
		]
	},
	{
		question: "👑 Who was the first king of the United Kingdom?",
		answer: "👑 King James I",
		options: [
			"👑 King George III",
			"👑 King Henry VIII",
			"👑 King James I",
			"👑 King William the Conqueror"
		]
	},
	{
		question: "🌍 What is the second-largest continent by land area?",
		answer: "🌍 Africa",
		options: [
			"🌍 Asia",
			"🌍 Africa",
			"🌍 North America",
			"🌍 South America"
		]
	},
	{
		question: "🪐 Which planet in our solar system is the largest?",
		answer: "🪐 Jupiter",
		options: [
			"🌕 Venus",
			"🪐 Jupiter",
			"🟥 Mars",
			"🪐 Saturn"
		]
	},
	{
		question: "🧙 Who is the author of the Harry Potter series?",
		answer: "📚 J.K. Rowling",
		options: [
			"📚 J.K. Rowling",
			"📚 Stephen King",
			"📚 George R.R. Martin",
			"📚 J.R.R. Tolkien"
		]
	},
	{
		question: "🐋 What is the largest mammal in the world?",
		answer: "🐋 Blue Whale",
		options: [
			"🐘 Elephant",
			"🦒 Giraffe",
			"🐋 Blue Whale",
			"🦛 Hippopotamus"
		]
	},
	{
		question: "🌍 What is the largest country by land area?",
		answer: "Russia",
		options: [
			"China",
			"Canada",
			"United States",
			"Russia"
		]
	},
	{
		question: "🕵️‍♀️ Who created the fictional detective character Sherlock Holmes?",
		answer: "🕵️‍♀️ Sir Arthur Conan Doyle",
		options: [
			"🕵️‍♀️ Agatha Christie",
			"🕵️‍♀️ Sir Arthur Conan Doyle",
			"🕵️‍♀️ Edgar Allan Poe",
			"🕵️‍♀️ Raymond Chandler"
		]
	},
	{
		question: "🎭 Who is the only actor to receive an Oscar nomination for playing Batman?",
		answer: "🎭 Michael Keaton",
		options: [
			"🎭 George Clooney",
			"🎭 Christian Bale",
			"🎭 Adam West",
			"🎭 Michael Keaton"
		]
	},
	{
		question: "🏢 What is the tallest building in the world as of 2023?",
		answer: "🏢 Burj Khalifa",
		options: [
			"🏢 Shanghai Tower",
			"🏢 Burj Khalifa",
			"🏢 Abraj Al Bait Clock Tower",
			"🏢 Ping An Finance Center"
		]
	},
	{
		question: "🧪 What is the most abundant gas in Earth's atmosphere?",
		answer: "🧪 Nitrogen",
		options: [
			"🧪 Carbon dioxide",
			"🧪 Oxygen",
			"🧪 Nitrogen",
			"🧪 Helium"
		]
	},
	{
		question: "🏆 Who is the only football player to have won three World Cups?",
		answer: "🏆 Pelé",
		options: [
			"🏆 Lionel Messi",
			"🏆 Cristiano Ronaldo",
			"🏆 Neymar",
			"🏆 Pelé"
		]
	},
	{
		question: "📚 What is the longest book in the English language?",
		answer: "📚 The Subspace Emissary's Worlds Conquest",
		options: [
			"📚 War and Peace",
			"📚 Infinite Jest",
			"📚 The Subspace Emissary's Worlds Conquest",
			"📚 Les Misérables"
		]
	},
	{
		question: "🎞️ Which film won the Academy Award for Best Picture in 2022?",
		answer: "🎞️ The Power of the Dog",
		options: [
			"🎞️ The Power of the Dog",
			"🎞️ Belfast",
			"🎞️ Dune",
			"🎞️ Nomadland"
		]
	},
	{
		question: "👨‍👩‍👧‍👦 Who is the youngest person to ever win a Nobel Prize?",
		answer: "👨‍👩‍👧‍👦 Malala Yousafzai",
		options: [
			"👨‍👩‍👧‍👦 Albert Einstein",
			"👨‍👩‍👧‍👦 Marie Curie",
			"👨‍👩‍👧‍👦 William Lawrence Bragg",
			"👨‍👩‍👧‍👦 Malala Yousafzai"
		]
	},
	{
		question: "🐦 What is the name of the largest living bird?",
		answer: "🐦 Ostrich",
		options: [
			"🐦 Eagle",
			"🐦 Ostrich",
			"🐦 Emu",
			"🐦 Albatross"
		]
	},
	{
		question: "🧬 What is the name of the process by which cells divide and create new cells?",
		answer: "🧬 Mitosis",
		options: [
			"🧬 Meiosis",
			"🧬 Mitosis",
			"🧬 Photosynthesis",
			"🧬 Respiration"
		]
	},
	{
		question: "🎭 Who wrote the play 'Romeo and Juliet'?",
		answer: "🎭 William Shakespeare",
		options: [
			"🎭 William Shakespeare",
			"🎭 Oscar Wilde",
			"🎭 Samuel Beckett",
			"🎭 Arthur Miller"
		]
	},
	{
		question: "🎨 Who painted the famous artwork 'The Starry Night'?",
		answer: "🎨 Vincent van Gogh",
		options: [
			"🎨 Pablo Picasso",
			"🎨 Claude Monet",
			"🎨 Vincent van Gogh",
			"🎨 Salvador Dalí"
		]
	},
	{
		question: "🌡️ What is the boiling point of water in degrees Celsius?",
		answer: "🌡️ 100",
		options: [
			"🌡️ 0",
			"🌡️ 50",
			"🌡️ 100",
			"🌡️ 150"
		]
	},
	{
		question: "🏆 What is the name of the trophy awarded to the winner of the FIFA World Cup?",
		answer: "🏆 Jules Rimet Trophy",
		options: [
			"🏆 World Cup Trophy",
			"🏆 Jules Rimet Trophy",
			"🏆 Golden Ball",
			"🏆 UEFA Champions League Trophy"
		]
	},
	{
		question: "🎭 What is the name of the longest-running Broadway musical of all time?",
		answer: "🎭 The Phantom of the Opera",
		options: [
			"🎭 Les Misérables",
			"🎭 The Lion King",
			"🎭 The Phantom of the Opera",
			"🎭 Cats"
		]
	},
	{
		question: "🧪 What is the chemical symbol for gold?",
		answer: "👑 Au",
		options: [
			"💍 Ag",
			"🥄 Cu",
			"👑 Au",
			"🔧 Fe"
		]
	},
	{
		question: "🦠 What does the acronym AIDS stand for?",
		answer: "🩸 Acquired Immune Deficiency Syndrome",
		options: [
			"🩸 Acquired Immune Deficiency Syndrome",
			"🦠 Acquired Immunodeficiency Syndrome",
			"🧬 Autoimmune Immune Deficiency Syndrome",
			"🧪 Antibody Induced Deficiency Syndrome"
		]
	},
	{
		question: "🎬 Who directed the movie 'Jurassic Park'?",
		answer: "🎥 Steven Spielberg",
		options: [
			"🎥 Christopher Nolan",
			"🎥 Quentin Tarantino",
			"🎥 Steven Spielberg",
			"🎥 James Cameron"
		]
	},
	{
		question: "🐘 What is the largest land animal?",
		answer: "🐘 Elephant",
		options: [
			"🐅 Tiger",
			"🦏 Rhinoceros",
			"🦁 Lion",
			"🐘 Elephant"
		]
	},
	{
		question: "🏆 Which country has won the most FIFA World Cup titles?",
		answer: "Brazil",
		options: [
			"Italy",
			"Germany",
			"Argentina",
			"Brazil"
		]
	},
	{
		question: "🌞 What is the largest planet in our solar system?",
		answer: "🪐 Jupiter",
		options: [
			"☿️ Mercury",
			"♀️ Venus",
			"🌍 Earth",
			"🪐 Jupiter"
		]
	},
	{
		question: "🎭 Who wrote the play 'Hamlet'?",
		answer: "🖋️ William Shakespeare",
		options: [
			"🖋️ Oscar Wilde",
			"🖋️ George Bernard Shaw",
			"🖋️ Samuel Beckett",
			"🖋️ William Shakespeare"
		]
	},
	{
		question: "🍔 What is the name of the McDonald's mascot?",
		answer: "🤡 Ronald McDonald",
		options: [
			"🐮 Bessie",
			"🐷 Porky",
			"🐤 Chickie",
			"🤡 Ronald McDonald"
		]
	},
	{
		question: "🏰 What is the name of the royal residence in London?",
		answer: "🏰 Buckingham Palace",
		options: [
			"🏰 Windsor Castle",
			"🏰 Kensington Palace",
			"🏰 Tower of London",
			"🏰 Buckingham Palace"
		]
	},
	{
		question: "👩‍🎨 Who painted the Mona Lisa?",
		answer: "🎨 Leonardo da Vinci",
		options: [
			"🎨 Pablo Picasso",
			"🎨 Vincent van Gogh",
			"🎨 Claude Monet",
			"🎨 Leonardo da Vinci"
		]
	},
	{
		question: "🌊 What is the world's largest ocean?",
		answer: "🌊 Pacific Ocean",
		options: [
			"🌊 Indian Ocean",
			"🌊 Atlantic Ocean",
			"🌊 Southern Ocean",
			"🌊 Pacific Ocean"
		]
	},
	{
		question: "🐉 What is the national animal of China?",
		answer: "🐼 Giant Panda",
		options: [
			"🐲 Dragon",
			"🐉 Phoenix",
			"🦁 Lion",
			"🐼 Giant Panda"
		]
	},
	{
		question: "🎭 Who played the character of Harry Potter in the movie series?",
		answer: "🎥 Daniel Radcliffe",
		options: [
			"🎥 Rupert Grint",
			"🎥 Tom Felton",
			"🎥 Daniel Radcliffe",
			"🎥 Elijah Wood"
		]
	},
	{
		question: "🌍 Which continent is the second largest in the world?",
		answer: "🌍 Africa",
		options: [
			"🌍 North America",
			"🌍 Europe",
			"🌍 South America",
			"🌍 Africa"
		]
	},
	{
		question: "🏰 Which famous tourist attraction is located in Agra, India?",
		answer: "🕌 Taj Mahal",
		options: [
			"🏯 Great Wall of China",
			"🏰 Colosseum",
			"🏰 Eiffel Tower",
			"🕌 Taj Mahal"
		]
	},
	{
		question: "🍕 What is the Italian word for 'pizza'?",
		answer: "🍕 Pizza",
		options: [
			"🍝 Spaghetti",
			"🍝 Ravioli",
			"🍕 Pizza",
			"🍔 Hamburger"
		]
	},
	{
		question: "🌌 What is the name of the galaxy we live in?",
		answer: "🌌 Milky Way",
		options: [
			"🌌 Andromeda",
			"🌌 Triangulum",
			"🌌 Pinwheel",
			"🌌 Milky Way"
		]
	},
	{
		question: "🦁 What is the name of the lion in 'The Lion King'?",
		answer: "🦁 Simba",
		options: [
			"🦁 Nala",
			"🦁 Mufasa",
			"🦁 Scar",
			"🦁 Simba"
		]
	},
	{
		question: "🧬 What is the smallest unit of life?",
		answer: "🧬 Cell",
		options: [
			"🧬 Atom",
			"🧬 Molecule",
			"🧬 Cell",
			"🧬 Organ"
		]
	},
	{
		question: "🚀 Who was the first human to travel to space?",
		answer: "🚀 Yuri Gagarin",
		options: [
			"🚀 Neil Armstrong",
			"🚀 Buzz Aldrin",
			"🚀 Yuri Gagarin",
			"🚀 Alan Shepard"
		]
	},
	{
		question: "🧠 What is the largest part of the human brain?",
		answer: "🧠 Cerebrum",
		options: [
			"🧠 Cerebellum",
			"🧠 Medulla Oblongata",
			"🧠 Corpus Callosum",
			"🧠 Cerebrum"
		]
	},
	{
		question: "🔬 What is the smallest particle that makes up an element?",
		answer: "🔬 Atom",
		options: [
			"🔬 Proton",
			"🔬 Neutron",
			"🔬 Electron",
			"🔬 Atom"
		]
	},
	{
		question: "🌐 Which country is the largest producer of coffee in the world?",
		answer: "🌐 Brazil",
		options: [
			"🌐 Colombia",
			"🌐 Vietnam",
			"🌐 Ethiopia",
			"🌐 Brazil"
		]
	},
	{
		question: "👨‍👩‍👧‍👦 What is the most spoken language in the world?",
		answer: "👨‍👩‍👧‍👦 Mandarin Chinese",
		options: [
			"👨‍👩‍👧‍👦 English",
			"👨‍👩‍👧‍👦 Spanish",
			"👨‍👩‍👧‍👦 Mandarin Chinese",
			"👨‍👩‍👧‍👦 Hindi"
		]
	},
	{
		question: "🌋 Which volcano destroyed the ancient Roman city of Pompeii?",
		answer: "🌋 Mount Vesuvius",
		options: [
			"🌋 Mount Etna",
			"🌋 Mount St. Helens",
			"🌋 Mount Vesuvius",
			"🌋 Krakatoa"
		]
	},
	{
		question: "🌡️ What is the boiling point of water in Celsius?",
		answer: "🌡️ 100°C",
		options: [
			"🌡️ 50°C",
			"🌡️ 75°C",
			"🌡️ 100°C",
			"🌡️ 125°C"
		]
	},
	{
		question: "🌌 What is the name of the nearest galaxy to the Milky Way?",
		answer: "🌌 Andromeda Galaxy",
		options: [
			"🌌 Pinwheel Galaxy",
			"🌌 Triangulum Galaxy",
			"🌌 Sombrero Galaxy",
			"🌌 Andromeda Galaxy"
		]
	},
	{
		question: "🎬 Who directed the 1979 science fiction horror film 'Alien'?",
		answer: "🎬 Ridley Scott",
		options: [
			"🎬 James Cameron",
			"🎬 Steven Spielberg",
			"🎬 Ridley Scott",
			"🎬 George Lucas"
		]
	},
	{
		question: "🌍 What is the largest continent on Earth?",
		answer: "🌍 Asia",
		options: [
			"🌍 Africa",
			"🌍 Europe",
			"🌍 Asia",
			"🌍 North America"
		]
	},
	{
		question: "👑 Who was the first king of the United Kingdom?",
		answer: "👑 King James VI of Scotland",
		options: [
			"👑 King Edward VI of England",
			"👑 King Henry VIII of England",
			"👑 King James VI of Scotland",
			"👑 King George I of Great Britain"
		]
	},
	{
		question: "🔭 What is the name of the largest radio telescope in the world?",
		answer: "🔭 FAST",
		options: [
			"🔭 Arecibo Observatory",
			"🔭 Green Bank Telescope",
			"🔭 Very Large Array",
			"🔭 FAST"
		]
	},
	{
		question: "🎭 Who wrote the play 'Romeo and Juliet'?",
		answer: "🎭 William Shakespeare",
		options: [
			"🎭 Christopher Marlowe",
			"🎭 John Webster",
			"🎭 William Shakespeare",
			"🎭 Thomas Kyd"
		]
	},
	{
		question: "🌊 What is the name of the largest ocean on Earth?",
		answer: "🌊 Pacific Ocean",
		options: [
			"🌊 Atlantic Ocean",
			"🌊 Indian Ocean",
			"🌊 Southern Ocean",
			"🌊 Pacific Ocean"
		]
	},
	{
		question: "🕰️ In what year was the first iPhone released?",
		answer: "🕰️ 2007",
		options: [
			"🕰️ 2005",
			"🕰️ 2007",
			"🕰️ 2009",
			"🕰️ 2011"
		]
	},
	{
		question: "🐺 What is the largest member of the dog family?",
		answer: "🐺 Gray Wolf",
		options: [
			"🐺 Coyote",
			"🐺 Red Fox",
			"🐺 Gray Wolf",
			"🐺 African Wild Dog"
		]
	},
	{
		question: "🎨 Who painted the 'Mona Lisa'?",
		answer: "🎨 Leonardo da Vinci",
		options: [
			"🎨 Michelangelo",
			"🎨 Raphael",
			"🎨 Leonardo da Vinci",
			"🎨 Vincent van Gogh"
		]
	},
	{
		question: "🚀 What was the name of the first manned mission to land on the moon?",
		answer: "🚀 Apollo 11",
		options: [
			"🚀 Apollo 8",
			"🚀 Apollo 11",
			"🚀 Apollo 13",
			"🚀 Apollo 17"
		]
	},
	{
		question: "🎤 Who is the lead singer of the band U2?",
		answer: "🎤 Bono",
		options: [
			"🎤 Sting",
			"🎤 Freddie Mercury",
			"🎤 Bono",
			"🎤 Chris Martin"
		]
	},
	{
		question: "🌐 What is the capital of Brazil?",
		answer: "🌐 Brasília",
		options: [
			"🌐 Rio de Janeiro",
			"🌐 São Paulo",
			"🌐 Brasília",
			"🌐 Salvador"
		]
	},
	{
		question: "🐦 What is the largest bird in the world?",
		answer: "🐦 Ostrich",
		options: [
			"🐦 Bald Eagle",
			"🐦 Condor",
			"🐦 Ostrich",
			"🐦 Emu"
		]
	},
	{
		question: "🏆 What is the most prestigious professional tennis tournament?",
		answer: "🏆 Wimbledon",
		options: [
			"🏆 US Open",
			"🏆 Australian Open",
			"🏆 French Open",
			"🏆 Wimbledon"
		]
	},
	{
		question: "🎼 Who wrote the music for the ballet 'The Nutcracker'?",
		answer: "🎼 Pyotr Ilyich Tchaikovsky",
		options: [
			"🎼 Johann Strauss II",
			"🎼 Wolfgang Amadeus Mozart",
			"🎼 Pyotr Ilyich Tchaikovsky",
			"🎼 Ludwig van Beethoven"
		]
	},
	{
		question: "🌋 What is the name of the largest active volcano in Europe?",
		answer: "🌋 Mount Etna",
		options: [
			"🌋 Mount Vesuvius",
			"🌋 Mount Etna",
			"🌋 Stromboli",
			"🌋 Mount Olympus"
		]
	},
	{
		question: "🗿 What is the name of the ancient stone monument in England?",
		answer: "🗿 Stonehenge",
		options: [
			"🗿 Machu Picchu",
			"🗿 Stonehenge",
			"🗿 Petra",
			"🗿 Easter Island"
		]
	},
	{
		question: "🎥 Who directed the 1994 film 'Pulp Fiction'?",
		answer: "🎥 Quentin Tarantino",
		options: [
			"🎥 Martin Scorsese",
			"🎥 Steven Spielberg",
			"🎥 Quentin Tarantino",
			"🎥 David Lynch"
		]
	},
	{
		question: "🕵️‍♀️ Who is the famous detective in Arthur Conan Doyle's stories?",
		answer: "🕵️‍♀️ Sherlock Holmes",
		options: [
			"🕵️‍♀️ James Bond",
			"🕵️‍♀️ Hercule Poirot",
			"🕵️‍♀️ Sherlock Holmes",
			"🕵️‍♀️ Miss Marple"
		]
	},
	{
		question: "🐒 What is the largest primate in the world?",
		answer: "🐒 Gorilla",
		options: [
			"🐒 Orangutan",
			"🐒 Chimpanzee",
			"🐒 Gorilla",
			"🐒 Gibbon"
		]
	},
	{
		question: "🎖️ Who was the first woman to win a Nobel Prize?",
		answer: "🎖️ Marie Curie",
		options: [
			"🎖️ Rosalind Franklin",
			"🎖️ Dorothy Crowfoot Hodgkin",
			"🎖️ Marie Curie",
			"🎖️ Ada Yonath"
		]
	},
	{
		question: "🚀 Who was the first human to orbit the Earth?",
		answer: "🚀 Yuri Gagarin",
		options: [
			"🚀 Neil Armstrong",
			"🚀 Buzz Aldrin",
			"🚀 John Glenn",
			"🚀 Yuri Gagarin"
		]
	},
	{
		question: "🎭 Who wrote the tragedy 'Hamlet'?",
		answer: "🎭 William Shakespeare",
		options: [
			"🎭 Molière",
			"🎭 Henrik Ibsen",
			"🎭 William Shakespeare",
			"🎭 Anton Chekhov"
		]
	},
	{
		question: "🎮 What is the best-selling video game of all time?",
		answer: "🎮 Minecraft",
		options: [
			"🎮 Tetris",
			"🎮 Super Mario Bros.",
			"🎮 Grand Theft Auto V",
			"🎮 Minecraft"
		]
	},
	{
		question: "🐍 What is the largest snake in the world?",
		answer: "🐍 Anaconda",
		options: [
			"🐍 Python",
			"🐍 Cobra",
			"🐍 Rattlesnake",
			"🐍 Anaconda"
		]
	},
	{
		question: "🏰 What is the name of the famous palace in France?",
		answer: "🏰 Palace of Versailles",
		options: [
			"🏰 Buckingham Palace",
			"🏰 Palace of Westminster",
			"🏰 Palace of Versailles",
			"🏰 Château de Chambord"
		]
	},
	{
		question: "🎨 Who painted the 'Starry Night'?",
		answer: "🎨 Vincent van Gogh",
		options: [
			"🎨 Pablo Picasso",
			"🎨 Leonardo da Vinci",
			"🎨 Vincent van Gogh",
			"🎨 Claude Monet"
		]
	},
	{
		question: "🗽 What is the name of the famous statue in New York Harbor?",
		answer: "🗽 Statue of Liberty",
		options: [
			"🗽 Christ the Redeemer",
			"🗽 The Vatican",
			"🗽 The Great Wall of China",
			"🗽 Statue of Liberty"
		]
	},
	{
		question: "🌍 What is the largest desert in the world?",
		answer: "🌍 Sahara",
		options: [
			"🌍 Gobi",
			"🌍 Arabian",
			"🌍 Kalahari",
			"🌍 Sahara"
		]
	},
	{
		question: "🎬 Who directed the movie 'The Godfather'?",
		answer: "🎬 Francis Ford Coppola",
		options: [
			"🎬 Martin Scorsese",
			"🎬 Alfred Hitchcock",
			"🎬 Steven Spielberg",
			"🎬 Francis Ford Coppola"
		]
	},
	{
		question: "🎤 Who is known as the 'King of Pop'?",
		answer: "🎤 Michael Jackson",
		options: [
			"🎤 Elvis Presley",
			"🎤 Frank Sinatra",
			"🎤 Michael Jackson",
			"🎤 Madonna"
		]
	},
	{
		question: "🐘 What is the largest land animal?",
		answer: "🐘 Elephant",
		options: [
			"🐘 Rhino",
			"🐘 Hippo",
			"🐘 Giraffe",
			"🐘 Elephant"
		]
	},
	{
		question: "🏛️ What is the name of the ancient Greek temple dedicated to Athena?",
		answer: "🏛️ Parthenon",
		options: [
			"🏛️ Colosseum",
			"🏛️ Pantheon",
			"🏛️ Parthenon",
			"🏛️ Acropolis"
		]
	},
	{
		question: "🎭 What is the name of the famous theater in London?",
		answer: "🎭 The Globe",
		options: [
			"🎭 The West End",
			"🎭 The Royal Opera House",
			"🎭 The Globe",
			"🎭 The National Theatre"
		]
	},
	{
		question: "🎧 What is the name of the world's largest music streaming service?",
		answer: "🎧 Spotify",
		options: [
			"🎧 Apple Music",
			"🎧 Tidal",
			"🎧 Amazon Music",
			"🎧 Spotify"
		]
	},
	{
		question: "🗺️ What is the capital of Australia?",
		answer: "🗺️ Canberra",
		options: [
			"🗺️ Sydney",
			"🗺️ Melbourne",
			"🗺️ Brisbane",
			"🗺️ Canberra"
		]
	},
	{
		question: "🧬 What is the name of the process by which cells divide?",
		answer: "🧬 Mitosis",
		options: [
			"🧬 Meiosis",
			"🧬 Cytokinesis",
			"🧬 Mitosis",
			"🧬 Apoptosis"
		]
	},
	{
		question: "🏴󠁧󠁢󠁳󠁣󠁴󠁿 What is the national animal of Scotland?",
		answer: "🏴󠁧󠁢󠁳󠁣󠁴󠁿 Unicorn",
		options: [
			"🏴󠁧󠁢󠁳󠁣󠁴󠁿 Lion",
			"🏴󠁧󠁢󠁳󠁣󠁴 Zebra",
			"🏴󠁧󠁢󠁳󠁣󠁴󠁿 Tiger",
			"🏴󠁧󠁢󠁳󠁣󠁴󠁿 Unicorn"
		]
	},
	{
		question: "🕵️‍♀️ Who is the fictional detective created by Arthur Conan Doyle?",
		answer: "🕵️‍♀️ Sherlock Holmes",
		options: [
			"🕵️‍♀️ Miss Marple",
			"🕵️‍♀️ Hercule Poirot",
			"🕵️‍♀️ Nancy Drew",
			"🕵️‍♀️ Sherlock Holmes"
		]
	},
	{
		question: "🏰 Which European city is home to the Palace of Versailles?",
		answer: "🏰 Paris",
		options: [
			"🏰 Vienna",
			"🏰 Rome",
			"🏰 Berlin",
			"🏰 Paris"
		]
	},
	{
		question: "🎬 Which actor played the character of Indiana Jones in the movie franchise?",
		answer: "🎬 Harrison Ford",
		options: [
			"🎬 Tom Cruise",
			"🎬 Brad Pitt",
			"🎬 Harrison Ford",
			"🎬 Leonardo DiCaprio"
		]
	},
	{
		question: "🐅 Which big cat is the largest in the world?",
		answer: "🐅 Siberian tiger",
		options: [
			"🐅 African lion",
			"🐅 Siberian tiger",
			"🐅 Jaguar",
			"🐅 Leopard"
		]
	},
	{
		question: "🎤 Which artist has won the most Grammy Awards?",
		answer: "🎤 Beyoncé",
		options: [
			"🎤 Michael Jackson",
			"🎤 Beyoncé",
			"🎤 Adele",
			"🎤 Taylor Swift"
		]
	},
	{
		question: "🇺🇸 Who was the first president of the United States?",
		answer: "George Washington",
		options: [
			"Thomas Jefferson",
			"George Washington",
			"Abraham Lincoln",
			"John F. Kennedy"
		]
	},
	{
		question: "🌌 What is the name of the galaxy that our solar system is a part of?",
		answer: "🌌 Milky Way",
		options: [
			"🌌 Andromeda",
			"🌌 Orion",
			"🌌 Milky Way",
			"🌌 Triangulum"
		]
	},
	{
		question: "🐘 What is the largest land animal in the world?",
		answer: "🐘 African elephant",
		options: [
			"🐘 African elephant",
			"🐘 White rhinoceros",
			"🐘 Hippopotamus",
			"🐘 Grizzly bear"
		]
	},
	{
		question: "🍕 What is the most popular topping on pizza?",
		answer: "🍕 Pepperoni",
		options: [
			"🍕 Mushroom",
			"🍕 Sausage",
			"🍕 Pepperoni",
			"🍕 Pineapple"
		]
	},
	{
		question: "🏰 Which castle is said to have inspired the castle in the Disney movie 'Sleeping Beauty'?",
		answer: "🏰 Neuschwanstein",
		options: [
			"🏰 Windsor",
			"🏰 Edinburgh",
			"🏰 Neuschwanstein",
			"🏰 Chambord"
		]
	},
	{
		question: "🚀 Who was the first person to walk on the moon?",
		answer: "🚀 Neil Armstrong",
		options: [
			"🚀 Yuri Gagarin",
			"🚀 Buzz Aldrin",
			"🚀 Neil Armstrong",
			"🚀 Alan Shepard"
		]
	},
	{
		question: "👩‍🎓 Who was the first woman to receive a Nobel Prize?",
		answer: "👩‍🎓 Marie Curie",
		options: [
			"👩‍🎓 Rosalind Franklin",
			"👩‍🎓 Dorothy Hodgkin",
			"👩‍🎓 Marie Curie",
			"👩‍🎓 Barbara McClintock"
		]
	},
	{
		question: "🎨 Who painted the 'Mona Lisa'?",
		answer: "🎨 Leonardo da Vinci",
		options: [
			"🎨 Vincent van Gogh",
			"🎨 Pablo Picasso",
			"🎨 Claude Monet",
			"🎨 Leonardo da Vinci"
		]
	},
	{
		question: "🌊 What is the world's largest ocean?",
		answer: "🌊 Pacific",
		options: [
			"🌊 Atlantic",
			"🌊 Indian",
			"🌊 Arctic",
			"🌊 Pacific"
		]
	},
	{
		question: "🧗‍♂️ What is the name of the highest mountain in the world?",
		answer: "🧗‍♂️ Mount Everest",
		options: [
			"🧗‍♂️ Mount Kilimanjaro",
			"🧗‍♂️ Mount Fuji",
			"🧗‍♂️ Mount Everest",
			"🧗‍♂️ Mount Denali"
		]
	},
	{
		question: "🎭 Who played the character of Walter White in the TV series 'Breaking Bad'?",
		answer: "🎭 Bryan Cranston",
		options: [
			"🎭 Aaron Paul",
			"🎭 Bob Odenkirk",
			"🎭 Bryan Cranston",
			"🎭 Dean Norris"
		]
	},
	{
		question: "🚀 What was the name of the first artificial satellite launched into space?",
		answer: "🚀 Sputnik 1",
		options: [
			"🚀 Explorer 1",
			"🚀 Sputnik 1",
			"🚀 Vanguard 1",
			"🚀 Tiangong 1"
		]
	},
	{
		question: "🎬 Who directed the 2019 movie 'Joker'?",
		answer: "🎬 Todd Phillips",
		options: [
			"🎬 Christopher Nolan",
			"🎬 Martin Scorsese",
			"🎬 Todd Phillips",
			"🎬 Quentin Tarantino"
		]
	},
	{
		question: "🌊 What is the deepest known part of the ocean?",
		answer: "🌊 Challenger Deep",
		options: [
			"🌊 Mariana Trench",
			"🌊 Puerto Rico Trench",
			"🌊 Java Trench",
			"🌊 Challenger Deep"
		]
	},
	{
		question: "Where is the headquarters of the United Nations located?",
		answer: "New York City",
		options: [
			"Geneva",
			"Paris",
			"London",
			"New York City"
		]
	},
	{
		question: "🎭 What is the name of the character who says the famous line 'All the world's a stage' in Shakespeare's 'As You Like It'?",
		answer: "🎭 Jaques",
		options: [
			"🎭 Orlando",
			"🎭 Rosalind",
			"🎭 Touchstone",
			"🎭 Jaques"
		]
	},
	{
		question: "🎭 What is the name of the tragic hero in Shakespeare's 'Othello'?",
		answer: "🎭 Othello",
		options: [
			"🎭 Cassio",
			"🎭 Iago",
			"🎭 Desdemona",
			"🎭 Othello"
		]
	},
	{
		question: "🎭 What is the name of the play in which the character of Portia famously declares 'The quality of mercy is not strained'?",
		answer: "🎭 The Merchant of Venice",
		options: [
			"🎭 Much Ado About Nothing",
			"🎭 Measure for Measure",
			"🎭 The Merchant of Venice",
			"🎭 As You Like It"
		]
	},
	{
		question: "🎭 What is the name of the play in which the character of Lady Macbeth famously declares 'Out, damn'd spot!'?",
		answer: "🎭 Macbeth",
		options: [
			"🎭 Hamlet",
			"🎭 Romeo and Juliet",
			"🎭 Macbeth",
			"🎭 King Lear"
		]
	},
	{
		question: "🎭 What is the name of the play in which the character of Hamlet famously delivers the soliloquy that begins with the words 'To be, or not to be'?",
		answer: "🎭 Hamlet",
		options: [
			"🎭 Julius Caesar",
			"🎭 Macbeth",
			"🎭 Hamlet",
			"🎭 Othello"
		]
	},
	{
		question: "🎭 What is the name of the play in which the character of Romeo famously declares 'But, soft! what light through yonder window breaks'?",
		answer: "🎭 Romeo and Juliet",
		options: [
			"🎭 The Taming of the Shrew",
			"🎭 Romeo and Juliet",
			"🎭 Macbeth",
			"🎭 King Lear"
		]
	},
	{
		question: "🎮 Who is the cover star of FIFA 22?",
		answer: "🎮 Kylian Mbappé",
		options: [
			"🎮 Cristiano Ronaldo",
			"🎮 Lionel Messi",
			"🎮 Neymar Jr.",
			"🎮 Kylian Mbappé"
		]
	},
	{
		question: "🎮 What is the name of the story mode introduced in FIFA 17?",
		answer: "🎮 The Journey",
		options: [
			"🎮 The Road to Glory",
			"🎮 The Path to Victory",
			"🎮 The Journey",
			"🎮 The Quest"
		]
	},
	{
		question: "🎮 Who is the all-time leading scorer in FIFA World Cup history?",
		answer: "🎮 Miroslav Klose",
		options: [
			"🎮 Pelé",
			"🎮 Diego Maradona",
			"🎮 Ronaldo",
			"🎮 Miroslav Klose"
		]
	},
	{
		question: "🎮 Which country has won the most FIFA World Cup titles?",
		answer: "🎮 Brazil",
		options: [
			"🎮 Germany",
			"🎮 Argentina",
			"🎮 Italy",
			"🎮 Brazil"
		]
	},
	{
		question: "🎮 Which player has won the most Ballon d'Or awards?",
		answer: "🎮 Lionel Messi",
		options: [
			"🎮 Cristiano Ronaldo",
			"🎮 Lionel Messi",
			"🎮 Neymar Jr.",
			"🎮 Ronaldinho"
		]
	},
	{
		question: "🎮 Which team won the first FIFA World Cup in 1930?",
		answer: "🎮 Uruguay",
		options: [
			"🎮 Brazil",
			"🎮 Argentina",
			"🎮 Italy",
			"🎮 Uruguay"
		]
	},
	{
		question: "🎮 What is the name of the national team in FIFA that has never qualified for the World Cup?",
		answer: "🎮 Bhutan",
		options: [
			"🎮 Bhutan",
			"🎮 Liechtenstein",
			"🎮 San Marino",
			"🎮 Andorra"
		]
	},
	{
		question: "🏛️ What is the name of the official residence of the President of Russia?",
		answer: "🏛️ Kremlin",
		options: [
			"🏛️ White House",
			"🏛️ Downing Street",
			"🏛️ Elysee Palace",
			"🏛️ Kremlin"
		]
	},
	{
		question: "🏛️ Who was the first female Prime Minister of the United Kingdom?",
		answer: "🏛️ Margaret Thatcher",
		options: [
			"🏛️ Theresa May",
			"🏛️ Angela Merkel",
			"🏛️ Margaret Thatcher",
			"🏛️ Indira Gandhi"
		]
	},
	{
		question: "🏛️ What is the name of the official residence of the Prime Minister of India?",
		answer: "🏛️ 7, Lok Kalyan Marg",
		options: [
			"🏛️ Rashtrapati Bhavan",
			"🏛️ 7, Lok Kalyan Marg",
			"🏛️ South Block",
			"🏛️ North Block"
		]
	},
	{
		question: "🔌 What does the acronym 'AC' stand for in AC power?",
		answer: "🔌 Alternating Current",
		options: [
			"🔌 Alternating Current",
			"🔌 Amperes Current",
			"🔌 Antenna Current",
			"🔌 Analog Current"
		]
	},
	{
		question: "💻 What does the acronym 'CPU' stand for in computing?",
		answer: "💻 Central Processing Unit",
		options: [
			"💻 Central Processing Unit",
			"💻 Computer Power Unit",
			"💻 Control Processing Unit",
			"💻 Circuit Processing Unit"
		]
	},
	{
		question: "📱 What does the acronym 'GPS' stand for?",
		answer: "📱 Global Positioning System",
		options: [
			"📱 Global Postal System",
			"📱 General Product Service",
			"📱 Global Positioning System",
			"📱 Geographic Positioning Service"
		]
	},
	{
		question: "💾 What is the name of the storage device that was commonly used in early computers?",
		answer: "💾 Floppy disk",
		options: [
			"💾 CD-ROM",
			"💾 Hard disk",
			"💾 Floppy disk",
			"💾 Memory stick"
		]
	},
	{
		question: "🔋 What type of battery is commonly used in small electronic devices?",
		answer: "🔋 Lithium-ion battery",
		options: [
			"🔋 Nickel-cadmium battery",
			"🔋 Lithium-ion battery",
			"🔋 Alkaline battery",
			"🔋 Lead-acid battery"
		]
	},
	{
		question: "🖥️ What does the acronym 'RAM' stand for in computer memory?",
		answer: "🖥️ Random Access Memory",
		options: [
			"🖥️ Read-Only Memory",
			"🖥️ Random Access Memory",
			"🖥️ Redundant Array of Memory",
			"🖥️ Remote Access Memory"
		]
	},
	{
		question: "🎥 What does the acronym 'HDMI' stand for in audio/video technology?",
		answer: "🎥 High-Definition Multimedia Interface",
		options: [
			"🎥 High-Definition Media Integration",
			"🎥 High-Definition Multimedia Interface",
			"🎥 High-Density Multiple Interface",
			"🎥 High-Speed Media Integration"
		]
	},
	{
		question: "🎮 What is the name of the fictional city in Grand Theft Auto V?",
		answer: "🎮 Los Santos",
		options: [
			"🎮 Liberty City",
			"🎮 San Fierro",
			"🎮 Vice City",
			"🎮 Los Santos"
		]
	},
	{
		question: "🎮 What is the name of the main character in Grand Theft Auto: San Andreas?",
		answer: "🎮 Carl Johnson",
		options: [
			"🎮 Tommy Vercetti",
			"🎮 CJ Johnson",
			"🎮 Franklin Clinton",
			"🎮 Carl Johnson"
		]
	},
	{
		question: "🎮 What is the name of the fictional gang that CJ belongs to in Grand Theft Auto: San Andreas?",
		answer: "🎮 Grove Street Families",
		options: [
			"🎮 Ballas",
			"🎮 Los Santos Vagos",
			"🎮 Varrios Los Aztecas",
			"🎮 Grove Street Families"
		]
	},
	{
		question: "🎮 What is the name of the bank heist mission in Grand Theft Auto V?",
		answer: "🎮 The Big Score",
		options: [
			"🎮 The Big Heist",
			"🎮 The Big Score",
			"🎮 The Big One",
			"🎮 The Big Dollar"
		]
	},
	{
		question: "🖥️ Which software is often used to create vector graphics?",
		answer: "🖥️ Adobe Illustrator",
		options: [
			"🖥️ Adobe Photoshop",
			"🖥️ Microsoft Paint",
			"🖥️ CorelDRAW",
			"🖥️ Adobe Illustrator"
		]
	},
	{
		question: "🖥️ Which software is often used to edit video?",
		answer: "🖥️ Adobe Premiere Pro",
		options: [
			"🖥️ Microsoft Word",
			"🖥️ Adobe Photoshop",
			"🖥️ Final Cut Pro",
			"🖥️ Adobe Premiere Pro"
		]
	},
	{
		question: "🖥️ Which software is often used to create 3D models?",
		answer: "🖥️ Autodesk Maya",
		options: [
			"🖥️ Adobe Illustrator",
			"🖥️ Blender",
			"🖥️ Autodesk Maya",
			"🖥️ AutoCAD"
		]
	},
	{
		question: "🖥️ Which software is often used for web development?",
		answer: "🖥️ Visual Studio Code",
		options: [
			"🖥️ Adobe Dreamweaver",
			"🖥️ Visual Studio",
			"🖥️ Atom",
			"🖥️ Visual Studio Code"
		]
	},
	{
		question: "🖥️ Which software is often used for project management?",
		answer: "🖥️ Microsoft Project",
		options: [
			"🖥️ Trello",
			"🖥️ Slack",
			"🖥️ Asana",
			"🖥️ Microsoft Project"
		]
	},
	{
		question: "🖧 What is a MAC address?",
		answer: "🖧 A unique identifier assigned to network interfaces for communications on a network",
		options: [
			"🖧 An IP address",
			"🖧 A unique identifier assigned to network interfaces for communications on a network",
			"🖧 An email address",
			"🖧 A physical address"
		]
	},
	{
		question: "🖧 What is a router?",
		answer: "🖧 A networking device that forwards data packets between computer networks",
		options: [
			"🖧 A device used to connect two or more computers together",
			"🖧 A type of firewall",
			"🖧 A networking device that forwards data packets between computer networks",
			"🖧 A type of modem"
		]
	},
	{
		question: "🖧 What is a subnet mask?",
		answer: "🖧 A number that defines a range of IP addresses that can be used in a network",
		options: [
			"🖧 A number that defines a range of MAC addresses that can be used in a network",
			"🖧 A device that connects two different types of networks together",
			"🖧 A number that defines a range of IP addresses that can be used in a network",
			"🖧 A type of security protocol"
		]
	},
	{
		question: "🖧 What is a firewall?",
		answer: "🖧 A network security system that monitors and controls incoming and outgoing network traffic",
		options: [
			"🖧 A type of router",
			"🖧 A network security system that monitors and controls incoming and outgoing network traffic",
			"🖧 A type of cable used to connect devices in a network",
			"🖧 A type of server"
		]
	},
	{
		question: "🖧 What is a DNS server?",
		answer: "🖧 A server that translates domain names into IP addresses",
		options: [
			"🖧 A server that stores website files",
			"🖧 A server that manages email communication",
			"🖧 A server that translates domain names into IP addresses",
			"🖧 A server that manages database access"
		]
	},
	{
		question: "👥 What is Facebook?",
		answer: "👥 A social networking website where users can connect with friends and family, join groups, and share content",
		options: [
			"👥 A search engine",
			"👥 An online shopping website",
			"👥 A social networking website where users can connect with friends and family, join groups, and share content",
			"👥 A blogging platform"
		]
	},
	{
		question: "👥 Who founded Facebook?",
		answer: "👥 Mark Zuckerberg, Eduardo Saverin, Andrew McCollum, Dustin Moskovitz, and Chris Hughes",
		options: [
			"👥 Steve Jobs",
			"👥 Bill Gates",
			"👥 Mark Zuckerberg, Eduardo Saverin, Andrew McCollum, Dustin Moskovitz, and Chris Hughes",
			"👥 Larry Page and Sergey Brin"
		]
	},
	{
		question: "👥 What is a Facebook page?",
		answer: "👥 A public profile created by businesses, organizations, or public figures to promote themselves on Facebook",
		options: [
			"👥 A private profile created by individuals for personal use",
			"👥 A private group created by individuals for personal use",
			"👥 A public profile created by businesses, organizations, or public figures to promote themselves on Facebook",
			"👥 A feature for sending private messages to friends and family"
		]
	},
	{
		question: "👥 What is a Facebook group?",
		answer: "👥 A community of Facebook users who share a common interest, goal, or topic",
		options: [
			"👥 A private profile created by individuals for personal use",
			"👥 A public profile created by businesses, organizations, or public figures to promote themselves on Facebook",
			"👥 A community of Facebook users who share a common interest, goal, or topic",
			"👥 A feature for sending private messages to friends and family"
		]
	},
	{
		question: "👥 What is a Facebook ad?",
		answer: "👥 A paid message that appears in users' Facebook feeds or on the right-hand side of the Facebook website",
		options: [
			"👥 A private message sent to a Facebook friend",
			"👥 A post made on a Facebook page",
			"👥 A paid message that appears in users' Facebook feeds or on the right-hand side of the Facebook website",
			"👥 A comment made on a Facebook post"
		]
	},
	{
		question: "What does SEO stand for in website development?",
		answer: "Search Engine Optimization",
		options: [
			"Social Engagement Optimization",
			"Search Engine Outreach",
			"Site Engagement Optimization",
			"Search Engine Optimization"
		]
	},
	{
		question: "What is a domain name?",
		answer: "A unique name that identifies a website on the internet",
		options: [
			"The server where a website is stored",
			"The address where a website is hosted",
			"A unique name that identifies a website on the internet",
			"The language used to develop a website"
		]
	},
	{
		question: "What does CMS stand for in website development?",
		answer: "Content Management System",
		options: [
			"Customer Management System",
			"Content Marketing Strategy",
			"Content Management Software",
			"Content Management System"
		]
	},
	{
		question: "What is the purpose of a sitemap on a website?",
		answer: "To help search engines crawl and index the pages on a website",
		options: [
			"To provide a visual layout of a website's pages",
			"To provide information about a website's visitors",
			"To help website visitors navigate a website",
			"To help search engines crawl and index the pages on a website"
		]
	},
	{
		question: "What is the difference between a static website and a dynamic website?",
		answer: "A static website's content is fixed, while a dynamic website's content can be changed by the user",
		options: [
			"A static website is more visually appealing than a dynamic website",
			"A dynamic website is easier to develop than a static website",
			"A static website's content is fixed, while a dynamic website's content can be changed by the user",
			"A dynamic website is more secure than a static website"
		]
	},
	{
		question: "What is the purpose of a responsive design in website development?",
		answer: "To ensure a website is optimized for viewing on all devices, including desktops, tablets, and smartphones",
		options: [
			"To make a website more visually appealing",
			"To improve a website's search engine ranking",
			"To ensure a website is optimized for viewing on all devices, including desktops, tablets, and smartphones",
			"To provide a better user experience for website visitors"
		]
	},
	{
		question: "What is HTTPS in website development?",
		answer: "A protocol for secure communication over the internet",
		options: [
			"A programming language used to develop websites",
			"A protocol for transferring files between servers and clients",
			"A protocol for secure communication over the internet",
			"A method for optimizing a website's search engine ranking"
		]
	},
	{
		question: "What is a cookie in website development?",
		answer: "A small piece of data stored on a user's computer by a website",
		options: [
			"A programming language used to develop websites",
			"A type of security software used to protect websites from hackers",
			"A small piece of data stored on a user's computer by a website",
			"A type of search engine optimization strategy"
		]
	},
	{
		question: "What is the purpose of a robots.txt file on a website?",
		answer: "To instruct search engine crawlers which pages on a website should not be indexed",
		options: [
			"To provide a visual layout of a website's pages",
			"To help website visitors navigate a website",
			"To instruct search engine crawlers which pages on a website should not be indexed",
			"To improve a website's loading speed"
		]
	},
	{
		question: "📜 Which Shakespearean play features the character of Caliban?",
		answer: "📜 The Tempest",
		options: [
			"📜 The Tempest",
			"📜 Twelfth Night",
			"📜 A Midsummer Night's Dream",
			"📜 Julius Caesar"
		]
	},
	{
		question: "🎼 Who wrote the famous opera 'The Barber of Seville'?",
		answer: "🎼 Gioachino Rossini",
		options: [
			"🎼 Wolfgang Amadeus Mozart",
			"🎼 Giuseppe Verdi",
			"🎼 Gioachino Rossini",
			"🎼 Richard Wagner"
		]
	},
	{
		question: "🌌 What is the name of the theory that describes the origin of the universe?",
		answer: "🌌 Big Bang Theory",
		options: [
			"🌌 String Theory",
			"🌌 General Relativity",
			"🌌 Quantum Mechanics",
			"🌌 Big Bang Theory"
		]
	},
	{
		question: "🔑 What is the name of the computer network that is commonly used to connect to the Internet?",
		answer: "🔑 TCP/IP",
		options: [
			"🔑 HTTP",
			"🔑 TCP/IP",
			"🔑 FTP",
			"🔑 SMTP"
		]
	},
	{
		question: "🎭 Who wrote the play 'Hamlet'?",
		answer: "🎭 William Shakespeare",
		options: [
			"🎭 Christopher Marlowe",
			"🎭 William Shakespeare",
			"🎭 Samuel Beckett",
			"🎭 Harold Pinter"
		]
	},
	{
		question: "🌍 What is the smallest continent by land area?",
		answer: "🌍 Australia",
		options: [
			"🌍 Asia",
			"🌍 Europe",
			"🌍 South America",
			"🌍 Australia"
		]
	},
	{
		question: "👨‍🎨 Who painted the famous artwork 'The Scream'?",
		answer: "👨‍🎨 Edvard Munch",
		options: [
			"👨‍🎨 Vincent van Gogh",
			"👨‍🎨 Salvador Dali",
			"👨‍🎨 Pablo Picasso",
			"👨‍🎨 Edvard Munch"
		]
	},
	{
		question: "🕰️ What is the smallest unit of time?",
		answer: "🕰️ Planck time",
		options: [
			"🕰️ Second",
			"🕰️ Minute",
			"🕰️ Hour",
			"🕰️ Planck time"
		]
	},
	{
		question: "🏰 In what city is the famous Palace of Versailles located?",
		answer: "🏰 Versailles",
		options: [
			"🏰 Paris",
			"🏰 Rome",
			"🏰 London",
			"🏰 Versailles"
		]
	},
	{
		question: "🚀 Who was the first person to walk on the moon?",
		answer: "🚀 Neil Armstrong",
		options: [
			"🚀 Yuri Gagarin",
			"🚀 Neil Armstrong",
			"🚀 Buzz Aldrin",
			"🚀 Alan Shepard"
		]
	},
	{
		question: "📖 What is the longest book in the English language?",
		answer: "📖 Artamène ou le Grand Cyrus",
		options: [
			"📖 Les Misérables",
			"📖 War and Peace",
			"📖 Infinite Jest",
			"📖 Artamène ou le Grand Cyrus"
		]
	},
	{
		question: "🎭 Who played the character of Michael Corleone in the movie 'The Godfather'?",
		answer: "🎭 Al Pacino",
		options: [
			"🎭 Marlon Brando",
			"🎭 Robert De Niro",
			"🎭 James Caan",
			"🎭 Al Pacino"
		]
	},
	{
		question: "👑 Who is the longest-reigning monarch in British history?",
		answer: "👑 Queen Elizabeth II",
		options: [
			"👑 Queen Victoria",
			"👑 King George III",
			"👑 Queen Elizabeth II",
			"👑 King Henry VIII"
		]
	},
	{
		question: "🔍 What is the smallest particle of matter?",
		answer: "🔍 Quark",
		options: [
			"🔍 Proton",
			"🔍 Electron",
			"🔍 Neutron",
			"🔍 Quark"
		]
	},
	{
		question: "🎭 Who is the author of the play 'Hamlet'?",
		answer: "🎭 William Shakespeare",
		options: [
			"🎭 William Shakespeare",
			"🎭 Christopher Marlowe",
			"🎭 John Webster",
			"🎭 Thomas Middleton"
		]
	},
	{
		question: "📜 In what year was Shakespeare born?",
		answer: "📜 1564",
		options: [
			"📜 1540",
			"📜 1556",
			"📜 1564",
			"📜 1582"
		]
	},
	{
		question: "🎭 What is the name of the tragic hero in Shakespeare's play 'Othello'?",
		answer: "🎭 Othello",
		options: [
			"🎭 Romeo",
			"🎭 Macbeth",
			"🎭 Othello",
			"🎭 Hamlet"
		]
	},
	{
		question: "📜 What is the name of the theatre where most of Shakespeare's plays were first performed?",
		answer: "📜 The Globe Theatre",
		options: [
			"📜 The Rose Theatre",
			"📜 The Swan Theatre",
			"📜 The Globe Theatre",
			"📜 The Blackfriars Theatre"
		]
	},
	{
		question: "🎭 Who is the female protagonist in Shakespeare's play 'Romeo and Juliet'?",
		answer: "🎭 Juliet",
		options: [
			"🎭 Ophelia",
			"🎭 Cordelia",
			"🎭 Juliet",
			"🎭 Desdemona"
		]
	},
	{
		question: "📜 In what city was Shakespeare born?",
		answer: "📜 Stratford-upon-Avon",
		options: [
			"📜 London",
			"📜 Oxford",
			"📜 Bath",
			"📜 Stratford-upon-Avon"
		]
	},
	{
		question: "🎭 What is the name of the character who delivers the 'to be or not to be' soliloquy in Shakespeare's play 'Hamlet'?",
		answer: "🎭 Hamlet",
		options: [
			"🎭 Macbeth",
			"🎭 King Lear",
			"🎭 Othello",
			"🎭 Hamlet"
		]
	},
	{
		question: "📜 In what year did Shakespeare die?",
		answer: "📜 1616",
		options: [
			"📜 1603",
			"📜 1616",
			"📜 1625",
			"📜 1632"
		]
	},
	{
		question: "🎭 What is the name of the comic character who appears in several of Shakespeare's plays?",
		answer: "🎭 Falstaff",
		options: [
			"🎭 Bottom",
			"🎭 Malvolio",
			"🎭 Falstaff",
			"🎭 Mercutio"
		]
	},
	{
		question: "🎼 Who composed the famous piece 'Fur Elise'?",
		answer: "🎼 Ludwig van Beethoven",
		options: [
			"🎼 Wolfgang Amadeus Mozart",
			"🎼 Johann Sebastian Bach",
			"🎼 Ludwig van Beethoven",
			"🎼 Franz Schubert"
		]
	},
	{
		question: "🔬 Who is credited with the discovery of penicillin?",
		answer: "🔬 Alexander Fleming",
		options: [
			"🔬 Louis Pasteur",
			"🔬 Robert Koch",
			"🔬 Jonas Salk",
			"🔬 Alexander Fleming"
		]
	},
	{
		question: "🕰️ What is the name of the clock tower in London that houses Big Ben?",
		answer: "🕰️ Elizabeth Tower",
		options: [
			"🕰️ Victoria Tower",
			"🕰️ Westminster Tower",
			"🕰️ St. Stephen's Tower",
			"🕰️ Elizabeth Tower"
		]
	},
	{
		question: "👑 Who was the first Queen of England?",
		answer: "👑 Mary I",
		options: [
			"👑 Elizabeth I",
			"👑 Victoria",
			"👑 Mary I",
			"👑 Anne"
		]
	},
	{
		question: "What is a common sign that someone is afraid to say 'I love you'?",
		answer: "They avoid saying it or changing the subject when it comes up 🙊",
		options: [
			"They say 'I love you' all the time to compensate 😘",
			"They try to make the other person say it first 🤔",
			"They avoid saying it or changing the subject when it comes up 🙊",
			"They only say it in public 🎤"
		]
	},
	{
		question: "What is a fear that may be behind someone's fear of saying 'I love you'?",
		answer: "Fear of vulnerability 😰",
		options: [
			"Fear of intimacy 😳",
			"Fear of commitment 💍",
			"Fear of rejection 😔",
			"Fear of vulnerability 😰"
		]
	},
	{
		question: "What is a common experience that can trigger fear of saying 'I love you'?",
		answer: "Past rejection or heartbreak 💔",
		options: [
			"Meeting the other person's family 👨‍👩‍👧‍👦",
			"Going on a first date 🌹",
			"Having a fight 🥊",
			"Past rejection or heartbreak 💔"
		]
	},
	{
		question: "What emoji can represent the feeling of being stuck in a cycle of fear and avoidance when it comes to saying 'I love you'?",
		answer: "🌀",
		options: [
			"❤️",
			"💔",
			"😔",
			"🌀"
		]
	},
	{
		question: "What is a technique someone can use to practice saying 'I love you'?",
		answer: "Role-playing with a friend or therapist 🎭",
		options: [
			"Writing it in a letter 📝",
			"Saying it in their head 💭",
			"Drinking alcohol to loosen up 🍺",
			"Role-playing with a friend or therapist 🎭"
		]
	},
	{
		question: "What is a way to express affection without saying 'I love you'?",
		answer: "Acts of service, such as cooking a favorite meal or doing chores 🍲",
		options: [
			"Giving extravagant gifts 🎁",
			"Sending frequent text messages 📱",
			"Spending all your time together 🕰️",
			"Acts of service, such as cooking a favorite meal or doing chores 🍲"
		]
	},
	{
		question: "What is a technique someone can use to calm their nerves before saying 'I love you'?",
		answer: "Taking deep breaths and visualizing a positive outcome 🧘",
		options: [
			"Chewing gum to distract themselves 🍬",
			"Listening to music to calm down 🎵",
			"Trying to make the other person laugh 😆",
			"Taking deep breaths and visualizing a positive outcome 🧘"
		]
	},
	{
		question: "What is a common misconception about people who are afraid to say 'I love you'?",
		answer: "That they don't feel love as deeply as others 💔",
		options: [
			"That they are not interested in a relationship 💔",
			"That they are being manipulative 😈",
			"That they are not capable of love 😢",
			"That they don't feel love as deeply as others 💔"
		]
	},
	{
		question: "What is a common fear behind the fear of saying 'I love you'?",
		answer: "Fear of rejection ❌",
		options: [
			"Fear of commitment 💍",
			"Fear of vulnerability 🛡️",
			"Fear of losing independence 🏃",
			"Fear of rejection ❌"
		]
	},
	{
		question: "What is a possible reason why someone might feel anxious about saying 'I love you'?",
		answer: "They feel like they don't deserve love 💔",
		options: [
			"They're afraid of the other person's reaction 😬",
			"They're worried about the future of the relationship 🤔",
			"They feel like they don't deserve love 💔",
			"They're not actually in love with the other person 🚫"
		]
	},
	{
		question: "What emoji can represent the feeling of relief after finally saying 'I love you'?",
		answer: "😌",
		options: [
			"😍",
			"😭",
			"😬",
			"😌"
		]
	},
	{
		question: "What is a technique someone can use to build up their confidence before saying 'I love you'?",
		answer: "Practice positive self-talk 🗣️",
		options: [
			"Watch romantic movies 🎥",
			"Read love poems 📖",
			"Take a relaxing bath 🛀",
			"Practice positive self-talk 🗣️"
		]
	},
	{
		question: "What is a possible reason why someone might feel guilty about saying 'I love you'?",
		answer: "They haven't been honest about their feelings in the past 🤥",
		options: [
			"They're afraid of being rejected 😰",
			"They're worried about the other person's reaction 🤔",
			"They feel like they're moving too fast in the relationship 🏎️",
			"They haven't been honest about their feelings in the past 🤥"
		]
	},
	{
		question: "What is the term for the fear of saying 'I love you' first?",
		answer: "Philemaphobia 😰",
		options: [
			"Philemaphobia 😰",
			"Arachnophobia 🕷️",
			"Acrophobia 🌁",
			"Claustrophobia 🚪"
		]
	},
	{
		question: "What emoji can represent the feeling of being tongue-tied or unable to express your feelings?",
		answer: "🤐",
		options: [
			"😊",
			"😂",
			"🤐",
			"😎"
		]
	},
	{
		question: "What is the term used to describe a relationship where one person has more power and control than the other?",
		answer: "Power imbalance",
		options: [
			"Domination",
			"Controlled relationship",
			"Power imbalance",
			"Submissive relationship"
		]
	},
	{
		question: "What is the term used to describe a situation where a person seeks out relationships with people who are emotionally unavailable or uninterested?",
		answer: "Emotional masochism",
		options: [
			"Codependency",
			"Emotional sadism",
			"Emotional masochism",
			"Attachment disorder"
		]
	},
	{
		question: "What is the term used to describe the tendency to seek out partners who have similar characteristics to one's parents?",
		answer: "Oedipus complex",
		options: [
			"Parental attachment",
			"Electra complex",
			"Oedipus complex",
			"Parental mirroring"
		]
	},
	{
		question: "What is a common symptom of someone who is afraid to say 'I love you'?",
		answer: "They have trouble with physical touch 😶",
		options: [
			"They say 'I love you' too soon 🤗",
			"They always want to be together 💑",
			"They have trouble with physical touch 😶",
			"They are overly critical of their partner 🤨"
		]
	},
	{
		question: "What is a strategy for dealing with fear of saying 'I love you'?",
		answer: "Being honest about your feelings and discussing them with your partner 🗣️",
		options: [
			"Avoiding the topic altogether 🙅‍♀️",
			"Trying to forget about your feelings ❌",
			"Making your partner say it first 🙋‍♂️",
			"Being honest about your feelings and discussing them with your partner 🗣️"
		]
	},
	{
		question: "What is an emoji that can represent the feeling of being overwhelmed with emotion when saying 'I love you'?",
		answer: "😍",
		options: [
			"😍",
			"😭",
			"😡",
			"😴"
		]
	},
	{
		question: "What is the term used to describe a website's ability to adjust its layout to fit the size of the screen it is being viewed on?",
		answer: "Responsive design 📱",
		options: [
			"Dynamic layout 💻",
			"Fluid design 🌊",
			"Responsive design 📱",
			"Adaptive layout 📏"
		]
	},
	{
		question: "What do you call a snowman with a six-pack?",
		answer: "An abdominal snowman! 😂",
		options: [
			"An icy Hulk",
			"A jolly green giant",
			"An abdominal snowman! 😂",
			"A frosty bodybuilder"
		]
	},
	{
		question: "Why was the math book sad?",
		answer: "Because it had too many problems. 🤣",
		options: [
			"Because it was dropped on the floor",
			"Because it was missing pages",
			"Because it had too many problems. 🤣",
			"Because it was outdated"
		]
	},
	{
		question: "Why did the tomato turn red?",
		answer: "Because it saw the salad dressing! 🍅",
		options: [
			"Because it was ripe",
			"Because it was angry",
			"Because it saw the salad dressing! 🍅",
			"Because it was blushing"
		]
	},
	{
		question: "Why don't scientists trust atoms?",
		answer: "Because they make up everything. 😆",
		options: [
			"Because they're too small to see",
			"Because they're too unpredictable",
			"Because they make up everything. 😆",
			"Because they're too expensive"
		]
	},
	{
		question: "What did the grape say when it got stepped on?",
		answer: "Nothing, it just let out a little wine. 🍷",
		options: [
			"Ouch!",
			"I'm squished!",
			"Nothing, it just let out a little wine. 🍷",
			"Please don't step on me"
		]
	},
	{
		question: "What is the name of the website that allows users to connect with professionals in various fields for one-on-one conversations?",
		answer: "Clarity.fm 🌐",
		options: [
			"LinkedIn 🌐",
			"Indeed 🌐",
			"Clarity.fm 🌐",
			"Upwork 🌐"
		]
	},
	{
		question: "What is the name of the website that provides resources for online learning and MOOCs?",
		answer: "Coursera 🌐",
		options: [
			"Codecademy 🌐",
			"Khan Academy 🌐",
			"Udacity 🌐",
			"Coursera 🌐"
		]
	},
	{
		question: "What is the name of the website that allows users to create and share presentations, infographics, and other visual content?",
		answer: "Canva 🌐",
		options: [
			"Prezi 🌐",
			"Canva 🌐",
			"Haiku Deck 🌐",
			"Slideshare 🌐"
		]
	},
	{
		question: "What is the name of the website that allows users to search for and book accommodations, such as hotels and vacation rentals?",
		answer: "Booking.com 🌐",
		options: [
			"Airbnb 🌐",
			"Expedia 🌐",
			"Booking.com 🌐",
			"TripAdvisor 🌐"
		]
	},
	{
		question: "What is the name of the website that allows users to sell handmade or vintage items, as well as craft supplies?",
		answer: "Etsy 🌐",
		options: [
			"eBay 🌐",
			"Amazon Handmade 🌐",
			"Etsy 🌐",
			"ArtFire 🌐"
		]
	},
	{
		question: "What is the term used to describe the practice of optimizing a website to appear higher in search engine results?",
		answer: "Search engine optimization (SEO) 🔍",
		options: [
			"Web traffic management 🚦",
			"Social media marketing 📱",
			"Search engine marketing (SEM) 🔎",
			"Search engine optimization (SEO) 🔍"
		]
	},
	{
		question: "What is the name of the programming language used to create dynamic and interactive web pages?",
		answer: "JavaScript 🖥️",
		options: [
			"Python 🐍",
			"Java ☕",
			"Ruby 💎",
			"JavaScript 🖥️"
		]
	},
	{
		question: "What is the term used to describe a website's ability to handle a large amount of traffic without crashing or slowing down?",
		answer: "Scalability 🚀",
		options: [
			"Reliability 💪",
			"Security 🔒",
			"Scalability 🚀",
			"Compatibility 🔄"
		]
	},
	{
		question: "What is the name of the web standard that defines the structure and content of a webpage?",
		answer: "HTML 🌐",
		options: [
			"CSS 💅",
			"XML 📄",
			"PHP 🐘",
			"HTML 🌐"
		]
	},
	{
		question: "What is a term for someone who is easily annoyed or angered?",
		answer: "Hot-headed 🔥",
		options: [
			"Impulsive 🤪",
			"Hot-headed 🔥",
			"Cynical 🙄",
			"Reserved 😐"
		]
	},
	{
		question: "What flower is commonly associated with love and romance?",
		answer: "Red rose 🌹",
		options: [
			"Daisy 🌼",
			"Tulip 🌷",
			"Red rose 🌹",
			"Sunflower 🌻"
		]
	},
	{
		question: "What does 'merry' mean in Elizabethan English?",
		answer: "Happy or cheerful 😊",
		options: [
			"Sad or gloomy 😔",
			"Angry or irritable 😠",
			"Excited or nervous 😬",
			"Happy or cheerful 😊"
		]
	},
	{
		question: "What is the Christian belief that Jesus rose from the dead after his crucifixion called? 🙏",
		answer: "Resurrection",
		options: [
			"Redemption",
			"Reconciliation",
			"Resurrection",
			"Revelation"
		]
	},
	{
		question: "What is the traditional attire worn by Scottish men?",
		answer: "Kilt 🏴󠁧󠁢󠁳󠁣󠁴󠁿",
		options: [
			"Sarong 🏝️",
			"Kimono 🇯🇵",
			"Kilt 🏴󠁧󠁢󠁳󠁣󠁴󠁿",
			"Dashiki 🌍"
		]
	},
	{
		question: "What do you call an alligator in a vest?",
		answer: "An investigator 🐊🕵️",
		options: [
			"A fashionista 🐊👗",
			"A swamp detective 🐊🔍",
			"A dapper croc 🐊💼",
			"An investigator 🐊🕵️"
		]
	},
	{
		question: "Why did the tomato turn red?",
		answer: "Because it saw the salad dressing! 🍅🥗",
		options: [
			"Because it was blushing 🍅😳",
			"Because it was ripe 🍅👌",
			"Because it was sunburned 🍅🌞",
			"Because it saw the salad dressing! 🍅🥗"
		]
	},
	{
		question: "What do you call a fish wearing a bowtie?",
		answer: "Sofishticated 🎩🐟",
		options: [
			"Sofishticated 🎩🐟",
			"Fintastic 🐠👌",
			"Gill-ty Pleasure 🐟😂",
			"Bass-tard 🐟🤪"
		]
	},
	{
		question: "What is celebrated on August 26th in the United States?",
		answer: "National Dog Day 🐶",
		options: [
			"National Donut Day 🍩",
			"National Hamburger Day 🍔",
			"National Dog Day 🐶",
			"National Ice Cream Day 🍦"
		]
	},
	{
		question: "What is celebrated on September 19th in the United States?",
		answer: "Talk Like a Pirate Day 🏴‍☠️",
		options: [
			"National Coffee Day ☕️",
			"National Sandwich Day 🥪",
			"Talk Like a Pirate Day 🏴‍☠️",
			"National Donut Day 🍩"
		]
	},
	{
		question: "What is celebrated on October 26th in the United States?",
		answer: "National Pumpkin Day 🎃",
		options: [
			"National Taco Day 🌮",
			"National Pizza Day 🍕",
			"National Donut Day 🍩",
			"National Pumpkin Day 🎃"
		]
	},
	{
		question: "What is celebrated on November 3rd in the United States?",
		answer: "National Sandwich Day 🥪",
		options: [
			"National Taco Day 🌮",
			"National Pizza Day 🍕",
			"National Sandwich Day 🥪",
			"National Donut Day 🍩"
		]
	},
	{
		question: "What is celebrated on December 4th in the United States?",
		answer: "National Cookie Day 🍪",
		options: [
			"National Cake Day 🎂",
			"National Pie Day 🥧",
			"National Ice Cream Day 🍦",
			"National Cookie Day 🍪"
		]
	},
	{
		question: "What is celebrated on January 29th in the United States?",
		answer: "National Puzzle Day 🧩",
		options: [
			"National Popcorn Day 🍿",
			"National Chocolate Day 🍫",
			"National Puzzle Day 🧩",
			"National Pretzel Day 🥨"
		]
	},
	{
		question: "What day is National Hug Day celebrated in the United States?",
		answer: "January 21 🤗",
		options: [
			"February 14 💕",
			"April 22 🌍",
			"July 4 🇺🇸",
			"January 21 🤗"
		]
	},
	{
		question: "What day is National Ice Cream Day celebrated in the United States?",
		answer: "Third Sunday in July 🍦",
		options: [
			"August 26 🍍",
			"June 1 🌞",
			"Third Sunday in July 🍦",
			"September 7 🎓"
		]
	},
	{
		question: "What day is National Cat Day celebrated in the United States?",
		answer: "October 29 😺",
		options: [
			"November 26 🦃",
			"October 31 🎃",
			"October 29 😺",
			"September 19 🐶"
		]
	},
	{
		question: "What day is National Pizza Day celebrated in the United States?",
		answer: "February 9 🍕",
		options: [
			"March 14 🥧",
			"April 1 🤡",
			"February 9 🍕",
			"May 5 🌮"
		]
	},
	{
		question: "What day is National Donut Day celebrated in the United States?",
		answer: "First Friday in June 🍩",
		options: [
			"July 4 🇺🇸",
			"January 1 🎉",
			"First Friday in June 🍩",
			"November 11 🎖️"
		]
	},
	{
		question: "What is the date of National Hamburger Day in the United States?",
		answer: "May 28 🍔",
		options: [
			"May 1 🍔",
			"May 28 🍔",
			"June 18 🍔",
			"July 4 🍔"
		]
	},
	{
		question: "Which country celebrates National Tea Day on April 21st?",
		answer: "United Kingdom 🇬🇧",
		options: [
			"India 🇮🇳",
			"China 🇨🇳",
			"United Kingdom 🇬🇧",
			"Japan 🇯🇵"
		]
	},
	{
		question: "What is the date of National Ice Cream Day in the United States?",
		answer: "Third Sunday in July 🍦",
		options: [
			"July 1 🍦",
			"First Sunday in July 🍦",
			"Third Sunday in July 🍦",
			"Last Sunday in July 🍦"
		]
	},
	{
		question: "What is the date of National Popcorn Day in the United States?",
		answer: "January 19 🍿",
		options: [
			"January 1 🍿",
			"January 15 🍿",
			"January 19 🍿",
			"January 31 🍿"
		]
	},
	{
		question: "What is the date of National Pizza Day in the United States?",
		answer: "February 9 🍕",
		options: [
			"February 1 🍕",
			"February 9 🍕",
			"February 14 🍕",
			"February 28 🍕"
		]
	},
	{
		question: "What is the date of National Taco Day in the United States?",
		answer: "October 4 🌮",
		options: [
			"September 16 🌮",
			"October 4 🌮",
			"November 3 🌮",
			"December 25 🌮"
		]
	},
	{
		question: "What is the date of National Coffee Day in the United States?",
		answer: "September 29 ☕️",
		options: [
			"August 29 ☕️",
			"September 29 ☕️",
			"October 29 ☕️",
			"November 29 ☕️"
		]
	},
	{
		question: "What is the date of National Donut Day in the United States?",
		answer: "First Friday in June 🍩",
		options: [
			"May 1 🍩",
			"First Friday in June 🍩",
			"July 4 🍩",
			"September 19 🍩"
		]
	},
	{
		question: "What holiday is celebrated on October 31st each year?",
		answer: "Halloween 🎃",
		options: [
			"Christmas 🎄",
			"Thanksgiving 🦃",
			"Easter 🐰",
			"Halloween 🎃"
		]
	},
	{
		question: "What holiday is celebrated on July 4th in the United States?",
		answer: "Independence Day 🇺🇸",
		options: [
			"New Year's Day 🎉",
			"Labor Day 🏭",
			"Memorial Day 🎖️",
			"Independence Day 🇺🇸"
		]
	},
	{
		question: "What holiday is celebrated on February 14th?",
		answer: "Valentine's Day 💘",
		options: [
			"Halloween 🎃",
			"Easter 🐰",
			"Thanksgiving 🦃",
			"Valentine's Day 💘"
		]
	},
	{
		question: "What holiday is celebrated on December 25th?",
		answer: "Christmas 🎄",
		options: [
			"Easter 🐰",
			"Thanksgiving 🦃",
			"New Year's Day 🎉",
			"Christmas 🎄"
		]
	},
	{
		question: "What holiday is celebrated on the first Monday in September in the United States?",
		answer: "Labor Day 🏭",
		options: [
			"Memorial Day 🎖️",
			"Independence Day 🇺🇸",
			"Christmas 🎄",
			"Labor Day 🏭"
		]
	},
	{
		question: "Why did the tomato turn red?",
		answer: "Because it saw the salad dressing 👀🍅",
		options: [
			"Because it was ripe 🍅👌",
			"Because it was cooked 🔥🍅",
			"Because it saw the salad dressing 👀🍅",
			"Because it was embarrassed 🙈🍅"
		]
	},
	{
		question: "What do you call a fake noodle?",
		answer: "An impasta 🍝😆",
		options: [
			"An impasta 🍝😆",
			"A fauxfettuccine 🍝😂",
			"A counterfettucine 🍝🤪",
			"A no-oodle 🍝😜"
		]
	},
	{
		question: "Why did the banana go to the doctor?",
		answer: "Because it wasn't peeling well 🍌😷",
		options: [
			"Because it had a bruise 🍌🤕",
			"Because it was feeling yellow 🍌😕",
			"Because it wanted a checkup 🍌😜",
			"Because it wasn't peeling well 🍌😷"
		]
	},
	{
		question: "What do you get when you cross a snowman and a shark?",
		answer: "Frostbite 🌨️🦈",
		options: [
			"Snowshark ❄️🦈",
			"Ice jaws 🧊🦈",
			"Frostbite 🌨️🦈",
			"Freeze fin 🌬️🦈"
		]
	},
	{
		question: "Why did the scarecrow win an award?",
		answer: "Because he was outstanding in his field! 🌾🏆",
		options: [
			"Because he was a real straw-man 🌾👨‍🌾",
			"Because he had a lot of crows as fans 🌾🐦",
			"Because he was a great listener 🌾👂",
			"Because he was outstanding in his field! 🌾🏆"
		]
	},
	{
		question: "What do you call a group of cows playing instruments?",
		answer: "A moo-sical band 🐄🎶",
		options: [
			"A cow-phony orchestra 🐄🎻",
			"A bovine brass ensemble 🐄🎺",
			"A pasture quartet 🐄🎵",
			"A moo-sical band 🐄🎶"
		]
	},
	{
		question: "Why did the banana go to the doctor?",
		answer: "Because it wasn't peeling well 🍌👨‍⚕️",
		options: [
			"Because it was feeling yellow 🍌😔",
			"Because it had a bad split 🍌😭",
			"Because it had a vitamin deficiency 🍌💊",
			"Because it wasn't peeling well 🍌👨‍⚕️"
		]
	},
	{
		question: "What is a traditional Japanese tea ceremony called?",
		answer: "Chanoyu (茶の湯) 🍵",
		options: [
			"Sado (茶道) 🍵",
			"Chanoyu (茶の湯) 🍵",
			"Ikebana (生け花) 🌸",
			"Kabuki (歌舞伎) 🎭"
		]
	},
	{
		question: "What is the national animal of Scotland?",
		answer: "Unicorn 🦄",
		options: [
			"Lion 🦁",
			"Dragon 🐲",
			"Unicorn 🦄",
			"Horse 🐴"
		]
	},
	{
		question: "What is the traditional dance of Hawaii?",
		answer: "Hula 💃",
		options: [
			"Salsa 💃",
			"Flamenco 💃",
			"Hula 💃",
			"Tango 💃"
		]
	},
	{
		question: "What is the traditional clothing of India for women called?",
		answer: "Sari (साड़ी) 👗",
		options: [
			"Kilt 🏴󠁧󠁢󠁳󠁣󠁴󠁿",
			"Kimono (着物) 👘",
			"Sari (साड़ी) 👗",
			"Dirndl 🇦🇹"
		]
	},
	{
		question: "What is the traditional headwear for men in Saudi Arabia called?",
		answer: "Ghutra (غُترة) 👳",
		options: [
			"Turban 🎩",
			"Kufi (قُفِّي) 👳",
			"Ghutra (غُترة) 👳",
			"Fez 👲"
		]
	},
	{
		question: "What is the traditional greeting in India?",
		answer: "Namaste 🙏",
		options: [
			"Bonjour",
			"Konnichiwa",
			"Namaste 🙏",
			"Ciao"
		]
	},

	{
		question: "What is the national sport of Japan?",
		answer: "Sumo wrestling",
		options: [
			"Football ⚽",
			"Cricket 🏏",
			"Baseball ⚾",
			"Sumo wrestling"
		]
	},

	{
		question: "What is the traditional dance of Hawaii?",
		answer: "Hula 💃",
		options: [
			"Samba 💃",
			"Ballet 🩰",
			"Tango 💃",
			"Hula 💃"
		]
	},

	{
		question: "What is the traditional food of Mexico?",
		answer: "Tacos 🌮",
		options: [
			"Sushi 🍣",
			"Pizza 🍕",
			"Spaghetti 🍝",
			"Tacos 🌮"
		]
	},

	{
		question: "What is the traditional drink of Russia?",
		answer: "Vodka 🍸",
		options: [
			"Tequila 🍹",
			"Sake 🍶",
			"Whiskey 🥃",
			"Vodka 🍸"
		]
	},
	{
		question: "What is the term for the Christian sacrament in which bread and wine are consecrated and consumed as the body and blood of Christ? 🍷",
		answer: "Eucharist",
		options: [
			"Baptism",
			"Confirmation",
			"Eucharist",
			"Anointing of the Sick"
		]
	},
	{
		question: "What is the term for the Christian rite of initiation by which a person is welcomed into the Church? 🙏",
		answer: "Baptism",
		options: [
			"Baptism",
			"Confirmation",
			"Eucharist",
			"Anointing of the Sick"
		]
	},
	{
		question: "What is the Christian belief in the three persons of the one Godhead known as? 🙏",
		answer: "Trinity",
		options: [
			"Redemption",
			"Reconciliation",
			"Resurrection",
			"Trinity"
		]
	},
	{
		question: "What is the Christian term for the belief in the second coming of Jesus Christ? ⏰",
		answer: "Parousia",
		options: [
			"Transfiguration",
			"Ascension",
			"Pentecost",
			"Parousia"
		]
	},
	{
		question: "What was the main form of entertainment during the Elizabethan era?",
		answer: "Theater 🎭",
		options: [
			"Sports 🏀",
			"Board games 🎲",
			"Music 🎶",
			"Theater 🎭"
		]
	},
	{
		question: "What is the holy book of Judaism?",
		answer: "The Torah 📖",
		options: [
			"The Bible 📖",
			"The Quran 📖",
			"The Bhagavad Gita 📖",
			"The Torah 📖"
		]
	},
	{
		question: "What is the name of the prophet who founded Islam?",
		answer: "Muhammad 🕋",
		options: [
			"Moses 🕋",
			"Jesus 🕋",
			"Buddha 🕋",
			"Muhammad 🕋"
		]
	},
	{
		question: "What is the ultimate goal of Buddhism?",
		answer: "To achieve enlightenment and end the cycle of rebirth 🔥",
		options: [
			"To be reunited with God in Heaven 🙏",
			"To follow the path of the Eightfold Noble Path 🛣️",
			"To create a personal relationship with Jesus Christ 🙏",
			"To achieve enlightenment and end the cycle of rebirth 🔥"
		]
	},
	{
		question: "What is the name of the first book of the Bible?",
		answer: "Genesis 📖",
		options: [
			"Exodus 📖",
			"Leviticus 📖",
			"Numbers 📖",
			"Genesis 📖"
		]
	},
	{
		question: "What is the holy text of Hinduism?",
		answer: "The Vedas 📖",
		options: [
			"The Quran 📖",
			"The Bible 📖",
			"The Bhagavad Gita 📖",
			"The Vedas 📖"
		]
	},
	{
		question: "What is the name of the holy river in Hinduism?",
		answer: "Ganges 🌊",
		options: [
			"Jordan 🌊",
			"Nile 🌊",
			"Amazon 🌊",
			"Ganges 🌊"
		]
	},
	{
		question: "What is the name of the Jewish day of rest?",
		answer: "Shabbat 🕯️",
		options: [
			"Sabbath 🕯️",
			"Sunday 🕯️",
			"Saturday 🕯️",
			"Shabbat 🕯️"
		]
	},
	{
		question: "What was the name of the most famous Elizabethan playwright?",
		answer: "William Shakespeare 🎭",
		options: [
			"Christopher Marlowe 🎭",
			"Ben Jonson 🎭",
			"William Shakespeare 🎭",
			"Thomas Middleton 🎭"
		]
	},
	{
		question: "What was the main color worn by the nobility during the Elizabethan era?",
		answer: "Purple 💜",
		options: [
			"Red ❤️",
			"Green 💚",
			"Yellow 💛",
			"Purple 💜"
		]
	},
	{
		question: "What was the name of the famous Elizabethan monarch?",
		answer: "Queen Elizabeth I 👑",
		options: [
			"Queen Victoria 👑",
			"Queen Elizabeth II 👑",
			"Queen Mary I 👑",
			"Queen Elizabeth I 👑"
		]
	},
	{
		question: "What was the name of the popular Elizabethan instrument similar to a guitar?",
		answer: "Lute 🎸",
		options: [
			"Harp 🎵",
			"Violin 🎻",
			"Lute 🎸",
			"Flute 🎶"
		]
	},
	{
		question: "What is the name of the famous Elizabethan play featuring a tragic love story?",
		answer: "Romeo and Juliet 🎭",
		options: [
			"Macbeth 🎭",
			"Hamlet 🎭",
			"Othello 🎭",
			"Romeo and Juliet 🎭"
		]
	},
	{
		question: "What was the name of the Elizabethan theater where Shakespeare's plays were performed?",
		answer: "The Globe 🌍",
		options: [
			"The Rose 🌹",
			"The Swan 🦢",
			"The Fortune 🍀",
			"The Globe 🌍"
		]
	},
	{
		question: "What is the name of the famous Elizabethan dress with a fitted bodice and full skirt?",
		answer: "The Elizabethan gown 👗",
		options: [
			"The Victorian corset 👗",
			"The Georgian robe 👗",
			"The Regency dress 👗",
			"The Elizabethan gown 👗"
		]
	},
	{
		question: "What was the name of the popular Elizabethan dance that involved hopping?",
		answer: "The Galliard 💃",
		options: [
			"The Waltz 💃",
			"The Tango 💃",
			"The Foxtrot 💃",
			"The Galliard 💃"
		]
	},
	{
		question: "What does 'thou' mean in Elizabethan English?",
		answer: "You 👉",
		options: [
			"Me 👈",
			"Them 👥",
			"We 👫",
			"You 👉"
		]
	},

	{
		question: "What does 'anon' mean in Elizabethan English?",
		answer: "Soon or shortly ⏱️",
		options: [
			"Never ❌",
			"Always 🕰️",
			"Occasionally 🌅",
			"Soon or shortly ⏱️"
		]
	},

	{
		question: "What emoji represents the Elizabethan era?",
		answer: "🏰",
		options: [
			"🎭",
			"👑",
			"🏰",
			"🕰️"
		]
	},

	{
		question: "What does 'forsooth' mean in Elizabethan English?",
		answer: "Indeed or truly 👍",
		options: [
			"Maybe or perhaps 🤔",
			"Never or not at all ❌",
			"Sometimes or occasionally 🤷",
			"Indeed or truly 👍"
		]
	},
	{
		question: "What is the largest mammal in the world?",
		answer: "Blue Whale 🐋",
		options: [
			"Elephant 🐘",
			"Giraffe 🦒",
			"Blue Whale 🐋",
			"Hippopotamus 🦛"
		]
	},
	{
		question: "What type of animal is known for carrying its young in a pouch?",
		answer: "Kangaroo 🦘",
		options: [
			"Giraffe 🦒",
			"Kangaroo 🦘",
			"Penguin 🐧",
			"Koala 🐨"
		]
	},
	{
		question: "What is the fastest land animal in the world?",
		answer: "Cheetah 🐆",
		options: [
			"Lion 🦁",
			"Cheetah 🐆",
			"Leopard 🐆",
			"Hyena 🐾"
		]
	},
	{
		question: "What animal is often used to represent intelligence?",
		answer: "Owl 🦉",
		options: [
			"Raven 🐦",
			"Fox 🦊",
			"Owl 🦉",
			"Monkey 🐒"
		]
	},
	{
		question: "What animal is known for being slow-moving and carrying its home on its back?",
		answer: "Snail 🐌",
		options: [
			"Turtle 🐢",
			"Crab 🦀",
			"Snail 🐌",
			"Beetle 🐞"
		]
	},
	{
		question: "What animal is the symbol of the United States of America?",
		answer: "Bald Eagle 🦅",
		options: [
			"Bald Eagle 🦅",
			"Penguin 🐧",
			"Puma 🐆",
			"Alligator 🐊"
		]
	},
	{
		question: "What is the national animal of Australia?",
		answer: "Kangaroo 🦘",
		options: [
			"Kangaroo 🦘",
			"Koala 🐨",
			"Emu 🦆",
			"Wombat 🐻"
		]
	},
	{
		question: "What animal is known for its ability to camouflage itself to blend into its surroundings?",
		answer: "Chameleon 🦎",
		options: [
			"Chameleon 🦎",
			"Peacock 🦚",
			"Zebra 🦓",
			"Gorilla 🦍"
		]
	},
	{
		question: "What flower is known for its vibrant, multi-colored petals?",
		answer: "Hydrangea 🌺",
		options: [
			"Lily 🌸",
			"Orchid 🌺",
			"Hydrangea 🌺",
			"Carnation 🌷"
		]
	},
	{
		question: "What flower is often used as a symbol of purity and innocence?",
		answer: "White lily 🌸",
		options: [
			"Chrysanthemum 🌼",
			"Peony 🌺",
			"White lily 🌸",
			"Iris 🌸"
		]
	},
	{
		question: "What flower is known for its strong and sweet fragrance?",
		answer: "Jasmine 🌼",
		options: [
			"Sunflower 🌻",
			"Cherry blossom 🌸",
			"Jasmine 🌼",
			"Daffodil 🌼"
		]
	},
	{
		question: "What flower is often used to represent gratitude and thankfulness?",
		answer: "Pink carnation 🌷",
		options: [
			"Yellow rose 🌹",
			"Red poppy 🌺",
			"Pink carnation 🌷",
			"Bluebell 🌼"
		]
	},
	{
		question: "What is a term for someone who is kind and compassionate?",
		answer: "Empathetic ❤️",
		options: [
			"Charismatic 💫",
			"Introverted 🤫",
			"Empathetic ❤️",
			"Opinionated 💬"
		]
	},
	{
		question: "What emoji could represent someone who is introverted?",
		answer: "🤫",
		options: [
			"🥳",
			"🤔",
			"🤫",
			"🙌"
		]
	},
	{
		question: "What is a personality trait often associated with the 🦁 emoji?",
		answer: "Confidence",
		options: [
			"Shyness",
			"Compassion",
			"Intelligence",
			"Confidence"
		]
	},
	{
		question: "What emoji could represent someone who is analytical and logical?",
		answer: "🤔",
		options: [
			"😂",
			"🤔",
			"❤️",
			"💩"
		]
	},
	{
		question: "What is a personality trait often associated with the 🐶 emoji?",
		answer: "Loyalty",
		options: [
			"Dishonesty",
			"Impulsiveness",
			"Anger",
			"Loyalty"
		]
	},
	{
		question: "What emoji could represent someone who is empathetic and compassionate?",
		answer: "❤️",
		options: [
			"💰",
			"👑",
			"🚀",
			"❤️"
		]
	},
	{
		question: "What is a term for someone who is quiet and reserved?",
		answer: "Introverted 🤫",
		options: [
			"Adventurous 🌎",
			"Confident 😎",
			"Introverted 🤫",
			"Arrogant 😒"
		]
	},
	{
		question: "What is a term for someone who is confident and self-assured?",
		answer: "Bold 💪",
		options: [
			"Timid 😔",
			"Bold 💪",
			"Anxious 😰",
			"Skeptical 🤔"
		]
	},
	{
		question: "What is a term for someone who is easily swayed or influenced by others?",
		answer: "Gullible 🤥",
		options: [
			"Assertive 🧐",
			"Rebellious 🤘",
			"Gullible 🤥",
			"Intuitive 🤔"
		]
	},
	{
		question: "What is a term for someone who enjoys spending time alone?",
		answer: "Introvert 🙎‍♂️",
		options: [
			"Extrovert 🙎‍♀️",
			"Ambivert 🧍‍♂️",
			"Introvert 🙎‍♂️",
			"Loner 🕵️‍♂️"
		]
	},
	{
		question: "What is a personality trait associated with the color blue?",
		answer: "Calmness and stability 💙",
		options: [
			"Excitement and passion ❤️",
			"Calmness and stability 💙",
			"Power and authority 👑",
			"Spontaneity and creativity 🎨"
		]
	},
	{
		question: "What is a term for someone who is obsessed with their own appearance?",
		answer: "Narcissist 💄",
		options: [
			"Perfectionist ✨",
			"Narcissist 💄",
			"Pessimist 😞",
			"Optimist 😊"
		]
	},
	{
		question: "What is a personality trait associated with the zodiac sign Leo?",
		answer: "Confidence and leadership 🦁",
		options: [
			"Intelligence and analytical thinking 🤓",
			"Compassion and empathy 🤗",
			"Confidence and leadership 🦁",
			"Creativity and imagination 🎭"
		]
	},
	{
		question: "What is a term for someone who is afraid of social situations?",
		answer: "Social anxiety 🥺",
		options: [
			"Introvert 🙎‍♂️",
			"Extrovert 🙎‍♀️",
			"Social anxiety 🥺",
			"Phobia 🕷️"
		]
	},
	{
		question: "What is a personality trait associated with the element fire?",
		answer: "Passion and energy 🔥",
		options: [
			"Calmness and tranquility 🌊",
			"Intelligence and wisdom 📚",
			"Passion and energy 🔥",
			"Sensitivity and emotion 🌸"
		]
	},
	{
		question: "What is a term for someone who enjoys being the center of attention?",
		answer: "Attention-seeker 🌟",
		options: [
			"Introvert 🙎‍♂️",
			"Extrovert 🙎‍♀️",
			"Attention-seeker 🌟",
			"Egomaniac 💁‍♂️"
		]
	},
	{
		question: "What is a personality trait associated with the zodiac sign Pisces?",
		answer: "Compassion and empathy 🐟",
		options: [
			"Confidence and leadership 🦁",
			"Intelligence and analytical thinking 🤓",
			"Compassion and empathy 🐟",
			"Creativity and imagination 🎭"
		]
	},
	{
		question: "What is the name of the largest online database of song lyrics?",
		answer: "Genius",
		options: [
			"Spotify",
			"Genius",
			"Musixmatch",
			"Lyrics.com"
		]
	},
	{
		question: "What is the name of the highest-selling album of all time?",
		answer: "Thriller",
		options: [
			"Back in Black",
			"Dark Side of the Moon",
			"Thriller",
			"The Eagles Greatest Hits"
		]
	},
	{
		question: "What musical term means 'gradually getting louder' and is often represented by the symbol 'cresc.'?",
		answer: "Crescendo 📈",
		options: [
			"Vibrato 🎵",
			"Syncopation 🎶",
			"Crescendo 📈",
			"Legato 🎼"
		]
	},
	{
		question: "What is the name of the device used to change the pitch of a guitar?",
		answer: "Whammy bar 🎸",
		options: [
			"Tremolo arm 🎸",
			"Whammy bar 🎸",
			"Pitch shifter 🎛️",
			"Modulation wheel 🎹"
		]
	},
	{
		question: "What is the highest male singing voice?",
		answer: "Falsetto 🎤",
		options: [
			"Soprano 🎤",
			"Tenor 🎤",
			"Baritone 🎤",
			"Falsetto 🎤"
		]
	},
	{
		question: "What is the name of the popular electronic music festival held annually in the Nevada desert?",
		answer: "Burning Man 🔥👨",
		options: [
			"Electric Daisy Carnival 🎡🎶",
			"Coachella 🌴🎸",
			"Bonnaroo 🐻🎶",
			"Burning Man 🔥👨"
		]
	},
	{
		question: "What is the most common time signature in music?",
		answer: "4/4 time ⏱️",
		options: [
			"2/4 time ⏱️",
			"3/4 time ⏱️",
			"4/4 time ⏱️",
			"6/8 time ⏱️"
		]
	},
	{
		question: "What is the name of the iconic guitar riff from the song 'Smoke on the Water'?",
		answer: "Riff Raff",
		options: [
			"Riff Raff",
			"Iron Man",
			"Sweet Child o' Mine",
			"Enter Sandman"
		]
	},
	{
		question: "What is the name of the Swedish music streaming service that has a green logo?",
		answer: "Spotify",
		options: [
			"Pandora",
			"Apple Music",
			"Tidal",
			"Spotify"
		]
	},
	{
		question: "What is the name of the popular singing competition show that has been on the air since 2002?",
		answer: "American Idol",
		options: [
			"The Voice",
			"The X Factor",
			"American Idol",
			"America's Got Talent"
		]
	},
	{
		question: "Which website is known for its user-generated reviews and ratings of businesses and services?",
		answer: "Yelp 🍽️",
		options: [
			"Amazon 🛍️",
			"Yelp 🍽️",
			"Reddit 🗣️",
			"Twitter 🐦"
		]
	},
	{
		question: "What is the best-selling album of all time?",
		answer: "Thriller by Michael Jackson 🎵🕺",
		options: [
			"The Eagles Greatest Hits",
			"Back in Black by AC/DC",
			"Thriller by Michael Jackson 🎵🕺",
			"The Dark Side of the Moon by Pink Floyd"
		]
	},
	{
		question: "What is the name of the guitar-playing, top hat-wearing member of Guns N' Roses?",
		answer: "Slash 🎸🎩",
		options: [
			"Axl Rose",
			"Izzy Stradlin",
			"Slash 🎸🎩",
			"Duff McKagan"
		]
	},
	{
		question: "What famous rock band wrote the hit song 'Stairway to Heaven'?",
		answer: "Led Zeppelin 🎵🎸",
		options: [
			"AC/DC",
			"Van Halen",
			"The Rolling Stones",
			"Led Zeppelin 🎵🎸"
		]
	},
	{
		question: "What music legend was known as 'The King of Pop'?",
		answer: "Michael Jackson 🎤👑",
		options: [
			"Elvis Presley",
			"James Brown",
			"Prince",
			"Michael Jackson 🎤👑"
		]
	},
	{
		question: "What is the name of Beyoncé's alter ego?",
		answer: "Sasha Fierce 🎶💃",
		options: [
			"Lemonade",
			"Queen Bey",
			"Mrs. Carter",
			"Sasha Fierce 🎶💃"
		]
	},
	{
		question: "Which website is a popular online marketplace for buying and selling handmade or vintage items?",
		answer: "Etsy 🎨",
		options: [
			"Amazon 🛍️",
			"Walmart 🏬",
			"Etsy 🎨",
			"eBay 🛒"
		]
	},
	{
		question: "Which website is a video-sharing platform that allows users to upload, share, and view videos?",
		answer: "YouTube 📹",
		options: [
			"Facebook 📱",
			"Twitter 🐦",
			"Instagram 📷",
			"YouTube 📹"
		]
	},
	{
		question: "Which website is a popular social networking platform that allows users to connect with friends and family, join groups, and share updates and media?",
		answer: "Facebook 📱",
		options: [
			"LinkedIn 🕴️",
			"Twitter 🐦",
			"Instagram 📷",
			"Facebook 📱"
		]
	},
	{
		question: "Which website is a popular blogging platform that allows users to create and publish content on a variety of topics?",
		answer: "WordPress 📝",
		options: [
			"Tumblr ✒️",
			"Blogger 📝",
			"Medium 📚",
			"WordPress 📝"
		]
	},
	{
		question: "What is the name of the website that allows users to rate and review businesses and services?",
		answer: "Yelp 🍽️",
		options: [
			"Amazon 📦",
			"TripAdvisor ✈️",
			"Yelp 🍽️",
			"Angie's List 🛠️"
		]
	},
	{
		question: "What is the name of the website where users can post and answer questions on a variety of topics?",
		answer: "Quora 🤔",
		options: [
			"Reddit 🗣️",
			"Stack Overflow 💻",
			"Quora 🤔",
			"Yahoo Answers 📚"
		]
	},
	{
		question: "What is the name of the website that provides online courses and tutorials?",
		answer: "Udemy 🎓",
		options: [
			"Lynda 🖥️",
			"Codecademy 💻",
			"Udemy 🎓",
			"Khan Academy 📚"
		]
	},
	{
		question: "What is the name of the website where users can search for job openings and post their resumes?",
		answer: "LinkedIn 💼",
		options: [
			"Indeed 🏢",
			"Monster 🐲",
			"Glassdoor 📊",
			"LinkedIn 💼"
		]
	},
	{
		question: "What is the name of the website that allows users to book accommodations and experiences while traveling?",
		answer: "Airbnb 🏠",
		options: [
			"Expedia ✈️",
			"Booking.com 🏨",
			"Airbnb 🏠",
			"Hotels.com 🛏️"
		]
	},
	{
		question: "What is a common sign that someone is afraid to say 'I love you'?",
		answer: "They avoid saying it or changing the subject when it comes up 💬",
		options: [
			"They say 'I love you' all the time to compensate 💕",
			"They try to make the other person say it first 🤔",
			"They avoid saying it or changing the subject when it comes up 💬",
			"They only say it in public 🌇"
		]
	},
	{
		question: "What is a fear that may be behind someone's fear of saying 'I love you'?",
		answer: "Fear of intimacy 😳",
		options: [
			"Fear of rejection 🚫",
			"Fear of abandonment 🗝️",
			"Fear of commitment 💍",
			"Fear of intimacy 😳"
		]
	},
	{
		question: "What is a common experience that can trigger fear of saying 'I love you'?",
		answer: "A past negative relationship experience 💔",
		options: [
			"Meeting the other person's family 👨‍👩‍👧‍👦",
			"Going on a first date 👫",
			"Having a fight 🤬",
			"A past negative relationship experience 💔"
		]
	},
	{
		question: "What emoji can represent the feeling of being emotionally paralyzed when it comes to saying 'I love you'?",
		answer: "😶",
		options: [
			"😍",
			"😢",
			"😰",
			"😶"
		]
	},
	{
		question: "What is a strategy someone can use to overcome their fear of saying 'I love you'?",
		answer: "Practicing self-compassion and positive self-talk 💭",
		options: [
			"Taking a break from the relationship 👋",
			"Talking to multiple friends for advice 🗣️",
			"Acting confident and rehearsing lines 🎭",
			"Practicing self-compassion and positive self-talk 💭"
		]
	},
	///////////////////////////////////////////////////////////HTML
	{
		question: "What is the purpose of the 'head' section in HTML?",
		answer: "The 'head' section is used to contain metadata about the document, including the title, author, and keywords.",
		options: [
			"The 'head' section is used to contain metadata about the document, including the title, author, and keywords.",
			"The 'head' section is used to contain the main content of the document.",
			"The 'head' section is used to define the styling for the document.",
			"The 'head' section is used to define the scripts used in the document."
		]
	},
	{
		question: "What does HTML stand for?",
		answer: "Hyper Text Markup Language",
		options: [
			"Hyper Text Preprocessor",
			"Hyper Text Markup Language",
			"Hyper Text Multiple Language",
			"Hyper Tool Multi Language"
		]
	},
	{
		question: "What does the 'alt' attribute in an HTML image tag do?",
		answer: "The 'alt' attribute provides alternative text for an image, which is displayed if the image cannot be loaded or if the user is using a screen reader.",
		options: [
			"The 'alt' attribute specifies the URL of the image to be displayed.",
			"The 'alt' attribute defines the width and height of the image in pixels.",
			"The 'alt' attribute provides alternative text for an image, which is displayed if the image cannot be loaded or if the user is using a screen reader.",
			"The 'alt' attribute sets the background color of the image."
		]
	},
	{
		question: "What is the purpose of the 'href' attribute in an HTML link tag?",
		answer: "The 'href' attribute specifies the URL of the page or file to which the link goes.",
		options: [
			"The 'href' attribute sets the color of the link.",
			"The 'href' attribute defines the size of the link.",
			"The 'href' attribute specifies the alignment of the link.",
			"The 'href' attribute specifies the URL of the page or file to which the link goes."
		]
	},
	{
		question: "What is the correct way to add an external CSS file to an HTML document?",
		answer: "The correct way to add an external CSS file to an HTML document is to use the link tag with the 'rel' attribute set to 'stylesheet' and the 'href' attribute set to the URL of the CSS file.",
		options: [
			"Use the style tag with the 'src' attribute set to the URL of the CSS file.",
			"The correct way to add an external CSS file to an HTML document is to use the link tag with the 'rel' attribute set to 'stylesheet' and the 'href' attribute set to the URL of the CSS file.",
			"Use the script tag with the 'src' attribute set to the URL of the CSS file.",
			"Use the style tag with the 'href' attribute set to the URL of the CSS file."
		]
	},
	{
		question: "What is the difference between the 'id' and 'class' attributes in HTML?",
		answer: "The 'id' attribute is used to uniquely identify an element, while the 'class' attribute is used to group elements with similar properties.",
		options: [
			"The 'id' attribute is used to group elements with similar properties, while the 'class' attribute is used to uniquely identify an element.",
			"The 'id' attribute is used to set the color of an element, while the 'class' attribute is used to set the font size of an element.",
			"The 'id' attribute is used to specify the URL of an element, while the 'class' attribute is used to specify the width of an element.",
			"The 'id' attribute is used to uniquely identify an element, while the 'class' attribute is used to group elements with similar properties."
		]
	},
	{
		question: "What is the purpose of the 'meta' tag in HTML?",
		answer: "The 'meta' tag provides metadata about an HTML document, such as the author, description, and keywords.",
		options: [
			"The 'meta' tag specifies the location of the HTML document.",
			"The 'meta' tag sets the background color of the HTML document.",
			"The 'meta' tag defines the size of the HTML document.",
			"The 'meta' tag provides metadata about an HTML document, such as the author, description, and keywords."
		]
	},
	{
		question: "What is the difference between a div and a span in HTML?",
		answer: "A div is a block-level element that is used to group content, while a span is an inline element that is used to apply styles to a specific portion of text.",
		options: [
			"A div is an inline element that is used to apply styles to a specific portion of text, while a span is a block-level element that is used to group content.",
			"A div is a way of positioning elements on a web page using coordinates, while a span is a way of defining the color scheme for a web page.",
			"A div is a block-level element that is used to group content, while a span is a way of defining the width of an element.",
			"A div is a block-level element that is used to group content, while a span is an inline element that is used to apply styles to a specific portion of text."
		]
	},
	///////////////////////////////////////////////////////////CSS
	{
		question: "What is the difference between 'display: block;' and 'display: inline;' in CSS?",
		answer: "'display: block;' will make an element take up the full width of its parent container, while 'display: inline;' will make an element take up only as much width as necessary.",
		options: [
			"'display: block;' will make an element take up the full width of its parent container, while 'display: inline;' will make an element take up only as much width as necessary.",
			"'display: block;' will make an element align vertically with other block-level elements, while 'display: inline;' will make an element align horizontally with other inline-level elements.",
			"'display: block;' will make an element stack vertically with other block-level elements, while 'display: inline;' will make an element stack horizontally with other inline-level elements.",
			"'display: block;' and 'display: inline;' are used to achieve the same effect in different contexts, and there is no inherent difference between them."
		]
	},
	{
		question: "What is the problem with the following CSS code? p { font-size: 14px; color: black; margin-top: 10px; }",
		answer: "There is no problem with the CSS code.",
		options: [
			"The font-size property should be defined in em instead of px.",
			"The color property should be defined using a hex code instead of a named color.",
			"The margin-top property should be defined in percent instead of px.",
			"There is no problem with the CSS code."
		]
	},
	{
		question: "What is the problem with the following CSS code? .box { background-color: red; height: 100px; width: 50%; }",
		answer: "The width property is not defined correctly.",
		options: [
			"The background-color property should be defined using a hex code instead of a named color.",
			"The height property is not defined correctly.",
			"The width property is not defined correctly.",
			"There is no problem with the CSS code."
		]
	},
	{
		question: "What is the problem with the following CSS code? #nav ul li { display: inline-block; }",
		answer: "The ID 'nav' is not defined in the HTML code.",
		options: [
			"The class 'nav' should be defined instead of the ID 'nav'.",
			"The display property should be defined using flexbox instead of inline-block.",
			"The ID 'nav' is not defined in the HTML code.",
			"There is no problem with the CSS code."
		]
	},
	{
		question: "What is the problem with the following CSS code? h1 { font-family: Arial, Helvetica, sans-serif; }",
		answer: "There is no problem with the CSS code.",
		options: [
			"The font-family property should only include web-safe fonts.",
			"The font-family property should only include Google fonts.",
			"The font-family property should only include system fonts.",
			"There is no problem with the CSS code."
		]
	},
	{
		question: "What is a CSS selector?",
		answer: "A CSS selector is a pattern that is used to select and style HTML elements based on their attributes, classes, or IDs.",
		options: [
			"A CSS selector is a function that is used to manipulate the styling of HTML elements.",
			"A CSS selector is a variable that is used to store styling information.",
			"A CSS selector is a keyword that is used to define a new CSS rule.",
			"A CSS selector is a pattern that is used to select and style HTML elements based on their attributes, classes, or IDs."
		]
	},
	{
		question: "What is the difference between the 'margin' and 'padding' CSS properties?",
		answer: "The 'padding' property adds space within an element, while the 'margin' property adds space outside an element.",
		options: [
			"The 'padding' property adds space outside an element, while the 'margin' property adds space within an element.",
			"The 'margin' property adds color to an element, while the 'padding' property adds space within an element.",
			"The 'margin' property defines the width of an element, while the 'padding' property defines the height of an element.",
			"The 'padding' property adds space within an element, while the 'margin' property adds space outside an element."
		]
	},
	{
		question: "What is the box model in CSS?",
		answer: "The box model is a design concept in CSS that describes the layout of an element as a rectangular box with content, padding, borders, and margins.",
		options: [
			"The box model is a way of positioning elements on a web page using coordinates.",
			"The box model is a way of defining the color scheme for a web page.",
			"The box model is a way of animating elements on a web page.",
			"The box model is a design concept in CSS that describes the layout of an element as a rectangular box with content, padding, borders, and margins."
		]
	},
	{
		question: "What is a CSS selector?",
		answer: "A CSS selector is a pattern that matches one or more elements on a web page, based on their tag name, class, ID, or other attributes.",
		options: [
			"A CSS selector is a way of defining the width of an element.",
			"A CSS selector is a way of positioning elements on a web page using coordinates.",
			"A CSS selector is a way of defining the color scheme for a web page.",
			"A CSS selector is a pattern that matches one or more elements on a web page, based on their tag name, class, ID, or other attributes."
		]
	},
	{
		question: "What is a media query in CSS?",
		answer: "A media query is a CSS technique that allows different styles to be applied to a web page based on the characteristics of the device or browser being used to view it, such as screen size or orientation.",
		options: [
			"A media query is a way of positioning elements on a web page using coordinates.",
			"A media query is a way of defining the color scheme for a web page.",
			"A media query is a way of defining the width of an element.",
			"A media query is a CSS technique that allows different styles to be applied to a web page based on the characteristics of the device or browser being used to view it, such as screen size or orientation."
		]
	},
	{
		question: "What is the problem with the following CSS code? .box { width: 100%; height: 100%; background-color: #f00; margin: auto; }",
		answer: "The height property will not work because the parent element needs a defined height.",
		options: [
			"The background-color property is not defined correctly.",
			"The margin property is not defined correctly.",
			"The width property is not defined correctly.",
			"The height property will not work because the parent element needs a defined height."
		]
	},
	{
		question: "What is the problem with the following CSS code? h1 { font-size: 24px; } h2 { font-size: 18px; } h3 { font-size: 14px; }",
		answer: "The selector for the h3 element is not defined correctly.",
		options: [
			"The font-size property is not defined correctly.",
			"The selector for the h1 element is not defined correctly.",
			"The selector for the h2 element is not defined correctly.",
			"The selector for the h3 element is not defined correctly."
		]
	},
	{
		question: "What is the problem with the following CSS code? .box { width: 200px; height: 200px; background-color: #f00; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); }",
		answer: "The parent element needs a relative or absolute positioning for the absolute positioning of the child element to work.",
		options: [
			"The width property is not defined correctly.",
			"The height property is not defined correctly.",
			"The background-color property is not defined correctly.",
			"The parent element needs a relative or absolute positioning for the absolute positioning of the child element to work."
		]
	},
	{
		question: "What is the problem with the following CSS code? .box { width: 200px; height: 200px; background-color: #f00; margin: auto; }",
		answer: "The parent element needs a defined width for the margin auto to work.",
		options: [
			"The width property is not defined correctly.",
			"The height property is not defined correctly.",
			"The background-color property is not defined correctly.",
			"The parent element needs a defined width for the margin auto to work."
		]
	},
	///////////////////////////////////////////////////////////Java
	{
		question: "What is the difference between a class and an object in Java?",
		answer: "A class is a blueprint or template for creating objects, while an object is an instance of a class.",
		options: [
			"A class is an instance of an object, while an object is a template for creating classes.",
			"A class is a keyword in Java, while an object is a data type.",
			"A class is a data structure, while an object is a method.",
			"A class is a blueprint or template for creating objects, while an object is an instance of a class."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { for (int i = 0; i < 5; i++) { System.out.println(i); } System.out.println(i); } }",
		answer: "This code will result in a compilation error because the variable i is not defined outside the for loop.",
		options: [
			"This code will compile without error, but will not output anything.",
			"This code will output the numbers 0 through 4 followed by a runtime error.",
			"This code will result in a compilation error because the variable i is not defined outside the for loop.",
			"This code will output an error message, but will not result in a runtime error."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int[] arr = {1, 2, 3}; System.out.println(arr[3]); } }",
		answer: "This code will throw an ArrayIndexOutOfBoundsException because the array arr only has 3 elements and the index 3 is out of bounds.",
		options: [
			"This code will compile without error, but will not output anything.",
			"This code will throw an ArrayIndexOutOfBoundsException because the array arr only has 3 elements and the index 3 is out of bounds.",
			"This code will result in a compilation error because the index operator is used incorrectly.",
			"This code will output an error message, but will not throw an exception."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { String s = \"Hello\"; if (s == \"Hello\") { System.out.println(\"Hello, world!\"); } } }",
		answer: `This code will output the message \"Hello, world!\".`,
		options: [
			"This code will compile without error, but will not output anything.",
			`This code will output the message \"Hello, world!\".`,
			"This code will result in a compilation error because the variable s is not initialized.",
			"This code will output an error message, but will not throw an exception."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int i = 0; while (i < 5) { System.out.println(i); i++; } System.out.println(i); } }",
		answer: "This code will output the numbers 0 through 4 followed by the number 5.",
		options: [
			"This code will output the numbers 0 through 4 followed by the number 5.",
			"This code will compile without error, but will not output anything.",
			"This code will output the numbers 1 through 5.",
			"This code will output an error message, but will not result in a runtime error."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { String s = null; if (s.equals(\"Hello\")) { System.out.println(\"Hello, world!\"); } } }",
		answer: "This code will throw a NullPointerException because the variable s is null and the equals() method cannot be called on a null object.",
		options: [
			"This code will compile without error, but will not output anything.",
			"This code will output the message \"Hello, world!\".",
			"This code will result in a compilation error because the variable s is not initialized.",
			"This code will throw a NullPointerException because the variable s is null and the equals() method cannot be called on a null object."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int x = 5; int y = 0; int z = x / y; System.out.println(z); } }",
		answer: "This code will throw an ArithmeticException because division by zero is not allowed.",
		options: [
			"This code will compile without error, but will not output anything.",
			"This code will output the value 0.",
			"This code will result in a compilation error because the variable y is initialized to zero.",
			"This code will throw an ArithmeticException because division by zero is not allowed."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int[] arr = new int[3]; arr[3] = 10; System.out.println(arr[3]); } }",
		answer: "This code will throw an ArrayIndexOutOfBoundsException because the array arr only has 3 elements and the index 3 is out of bounds.",
		options: [
			"This code will compile without error, but will not output anything.",
			"This code will throw an ArrayIndexOutOfBoundsException because the array arr only has 3 elements and the index 3 is out of bounds.",
			"This code will result in a compilation error because the index operator is used incorrectly.",
			"This code will throw an ArithmeticException because division by zero is not allowed."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int x = 5; int y = 2; int z = x % y; System.out.println(z); } }",
		answer: "This code will output the value 1.",
		options: [
			"This code will result in a compilation error because the modulo operator cannot be used with integers.",
			"This code will compile without error, but will not output anything.",
			"This code will output the value 2.",
			"This code will output the value 1."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { String s = \"hello world\"; s.toUpperCase(); System.out.println(s); } }",
		answer: "This code will output the string \"hello world\" in lowercase because the toUpperCase() method returns a new string in uppercase, but does not modify the original string s.",
		options: [
			"This code will output the string \"hello world\" in lowercase because the toUpperCase() method returns a new string in uppercase, but does not modify the original string s.",
			"This code will output the string \"HELLO WORLD\".",
			"This code will result in a compilation error because the toUpperCase() method cannot be used with strings.",
			"This code will output an error message, but will not throw an exception."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int i = 0; for (; i < 5; i++) { System.out.println(i); } System.out.println(i); } }",
		answer: "This code will output the numbers 0 through 4 followed by the number 5.",
		options: [
			"This code will result in a compilation error because the variable i is not defined outside the for loop.",
			"This code will output the numbers 0 through 4 followed by the number 5.",
			"This code will output the numbers 1 through 5.",
			"This code will output an error message, but will not result in a runtime error."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int[] arr = {1, 2, 3}; for (int i = 0; i <= arr.length; i++) { System.out.println(arr[i]); } } }",
		answer: "This code will throw an ArrayIndexOutOfBoundsException because the loop variable i exceeds the length of the array arr.",
		options: [
			"This code will compile without error, but will not output anything.",
			"This code will output the values 1, 2, and 3.",
			"This code will result in a compilation error because the index operator is used incorrectly.",
			"This code will throw an ArrayIndexOutOfBoundsException because the loop variable i exceeds the length of the array arr."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int x = 5; int y = 2; double z = x / y; System.out.println(z); } }",
		answer: "This code will output the value 2.0 because integer division is performed before the result is converted to a double.",
		options: [
			"This code will result in a compilation error because the division operator cannot be used with integers.",
			"This code will output the value 2.0 because integer division is performed before the result is converted to a double.",
			"This code will output the value 2.5.",
			"This code will output an error message, but will not throw an exception."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int i = 0; while (i < 5) { System.out.println(i); i = i++; } System.out.println(i); } }",
		answer: "This code will output the numbers 0 through 4 followed by the number 0, because the post-increment operator i++ will increment the value of i after it has been evaluated, so i will always be assigned the value 0 in each iteration of the loop.",
		options: [
			"This code will output the numbers 0 through 4 followed by the number 0, because the post-increment operator i++ will increment the value of i after it has been evaluated, so i will always be assigned the value 0 in each iteration of the loop.",
			"This code will compile without error, but will not output anything.",
			"This code will output the numbers 1 through 5.",
			"This code will output an error message, but will not result in a runtime error."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { String s = \"hello\"; String t = s; s = s.concat(\" world\"); System.out.println(t); } }",
		answer: "This code will output the string \"hello\" because the concat() method returns a new string with the concatenated values, but does not modify the original string s.",
		options: [
			`This code will output the string \"hello\" because the concat() method returns a new string with the concatenated values, but does not modify the original string s.`,
			`This code will output the string \"hello world\".`,
			`This code will result in a compilation error because the concat() method cannot be used with strings.`,
			`This code will output an error message, but will not throw an exception.`
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int[] arr = {1, 2, 3}; for (int i = 0; i < arr.length; i++) { if (arr[i] == 2) continue; System.out.println(arr[i]); } } }",
		answer: "This code will output the values 1 and 3, because the continue statement will skip over the value 2 in the array.",
		options: [
			"This code will compile without error, but will not output anything.",
			"This code will output the values 1 and 2.",
			"This code will result in a compilation error because the continue statement cannot be used in a for loop.",
			"This code will output the values 1 and 3, because the continue statement will skip over the value 2 in the array."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int x = 5; int y = 10; System.out.println(\"x + y = \" + x + y); } }",
		answer: `This code will output the string \"x + y = 510\"`,
		options: [
			"This code will compile without error, but will not output anything.",
			"This code will output the string \"x + y = 15\".",
			`This code will output the string \"x + y = 510\"`,
			"This code will output an error message, but will not throw an exception."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int i = 0; while (i < 10) { if (i % 2 == 0) continue; System.out.println(i); i++; } } }",
		answer: "This code will result in an infinite loop because the increment statement i++ is not executed if the continue statement is executed.",
		options: [
			"This code will compile without error, but will not output anything.",
			"This code will result in an infinite loop because the increment statement i++ is not executed if the continue statement is executed.",
			"This code will result in a compilation error because the continue statement cannot be used in a while loop.",
			"This code will output an error message, but will not throw an exception."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int i = 0; while (i < 10) { System.out.println(i); i += 2; } } }",
		answer: "This code will output the even numbers from 0 to 8 because the statement i += 2 will add 2 to i in each iteration of the loop.",
		options: [
			"This code will output the even numbers from 0 to 8 because the statement i += 2 will add 2 to i in each iteration of the loop.",
			"This code will output the odd numbers from 1 to 9.",
			"This code will result in a compilation error because the i variable is not defined.",
			"This code will output an error message, but will not throw an exception."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int i = 0; do { System.out.println(i); i++; } while (i < 10); } }",
		answer: "This code will output the numbers from 0 to 9 because the do-while loop will execute at least once, even if the condition i < 10 is false.",
		options: [
			"This code will output the numbers from 0 to 9 because the do-while loop will execute at least once, even if the condition i < 10 is false.",
			"This code will output the numbers from 1 to 10.",
			"This code will result in a compilation error because the do-while loop requires a break statement.",
			"This code will output an error message, but will not throw an exception."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int i = 0; for (i = 0; i < 10; i++) { System.out.println(i); } } }",
		answer: "This code will output the numbers from 0 to 9 because the for loop will execute while i is less than 10.",
		options: [
			"This code will compile without error, but will not output anything.",
			"This code will output the numbers from 1 to 10.",
			"This code will output the numbers from 0 to 9 because the for loop will execute while i is less than 10.",
			"This code will output an error message, but will not throw an exception."
		]
	},
	{
		question: "What is the problem with the following Java code? int x = 5; int y = x + 5;",
		answer: "There is no problem with the Java code.",
		options: [
			"The variable x should be initialized with a final keyword.",
			"The variable y should be initialized with a final keyword.",
			"The variable y should be initialized with a value of x * 5 instead of x + 5.",
			"There is no problem with the Java code."
		]
	},
	{
		question: "What is the problem with the following Java code? int[] arr = new int[5]; arr[5] = 10;",
		answer: "The index of the array is out of bounds.",
		options: [
			"The size of the array should be defined using an ArrayList instead.",
			"The value assigned to the array should be defined using a string instead.",
			"The index of the array is out of bounds.",
			"There is no problem with the Java code."
		]
	},
	{
		question: "What is the problem with the following Java code? String str = null; str.length();",
		answer: "A NullPointerException will be thrown.",
		options: [
			"The String variable should be initialized with an empty string instead of null.",
			"The length property should be defined using a different data type.",
			"A NullPointerException will be thrown.",
			"There is no problem with the Java code."
		]
	},
	{
		question: "What is the problem with the following Java code? for (int i = 0; i < 10; i++) { System.out.println(i); }",
		answer: "There is no problem with the Java code.",
		options: [
			"The for loop should be replaced with a while loop.",
			"The println method should be replaced with a print method.",
			"The for loop should have a different condition.",
			"There is no problem with the Java code."
		]
	},
	{
		question: "What is the problem with the following Java code? int num = 10; System.out.println(num / 0);",
		answer: "An ArithmeticException will be thrown.",
		options: [
			"The value assigned to num should be a double instead of an integer.",
			"The println method should be replaced with a print method.",
			"An ArithmeticException will be thrown.",
			"There is no problem with the Java code."
		]
	},
	{
		question: "What is the problem with the following Java code? int[] arr = {1, 2, 3}; System.out.println(arr[3]);",
		answer: "An ArrayIndexOutOfBoundsException will be thrown.",
		options: [
			"The value assigned to arr should be defined using a string instead.",
			"The println method should be replaced with a print method.",
			"An ArrayIndexOutOfBoundsException will be thrown.",
			"There is no problem with the Java code."
		]
	},
	{
		question: "What is the problem with the following Java code? String str = \"hello\"; int num = Integer.parseInt(str);",
		answer: "A NumberFormatException will be thrown.",
		options: [
			"The value assigned to str should be an integer instead of a string.",
			"The parseInt method should be replaced with a different method.",
			"A NumberFormatException will be thrown.",
			"There is no problem with the Java code."
		]
	},
	{
		question: "What is the problem with the following Java code? int x = 5; if (x = 10) { System.out.println(\"x is 10\"); }",
		answer: "The if statement should use a double equals sign instead of a single equals sign.",
		options: [
			"The value assigned to x should be a string instead of an integer.",
			"The println method should be replaced with a print method.",
			"The if statement should use a double equals sign instead of a single equals sign.",
			"There is no problem with the Java code."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int[] arr = {1, 2, 3, 4, 5}; for (int i = 0; i < 5; i++) { System.out.println(arr[i]); } } }",
		answer: "This code will output the elements of the arr array from index 0 to 4, inclusive.",
		options: [
			"This code will compile without error, but will not output anything.",
			"This code will output the elements of the arr array from index 1 to 5, inclusive.",
			"This code will output the elements of the arr array from index 0 to 4, inclusive.",
			"This code will output an error message, but will not throw an exception."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int num = 7; if (num % 2 == 0) { System.out.println(num + \" is even\"); } else { System.out.println(num + \" is odd\"); } } }",
		answer: `This code will output \"7 is odd\"`,
		options: [
			`This code will output \"7 is odd\"`,
			`This code will output \"7 is even\"`,
			"This code will result in a compilation error because the modulo operator is not defined for integers.",
			"This code will output an error message, but will not throw an exception."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int x = 10; int y = 5; if (x > y) { System.out.println(\"x is greater than y\"); } else { System.out.println(\"y is greater than x\"); } } }",
		answer: `This code will output \"x is greater than y\"`,
		options: [
			`This code will output \"x is greater than y\"`,
			`This code will output \"y is greater than x\"`,
			"This code will result in a compilation error because the x and y variables are not initialized.",
			"This code will output an error message, but will not throw an exception."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { String str = \"Hello, World!\"; int length = str.length(); for (int i = 0; i <= length; i++) { System.out.println(str.charAt(i)); } } }",
		answer: "This code will throw an IndexOutOfBoundsException because the loop tries to access the character at index equal to the length of the string, which is not a valid index.",
		options: [
			"This code will compile without error, but will not output anything.",
			"This code will output the characters of the str string from index 0 to length - 1, inclusive.",
			"This code will throw an IndexOutOfBoundsException because the loop tries to access the character at index equal to the length of the string, which is not a valid index.",
			"This code will output an error message, but will not throw an exception."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int[] arr = new int[5]; for (int i = 1; i <= arr.length; i++) { arr[i] = i; } } }",
		answer: "This code will throw an IndexOutOfBoundsException because the loop tries to access the element at index 5 of the arr array, which is out of bounds.",
		options: [
			"This code will throw an IndexOutOfBoundsException because the loop tries to access the element at index 5 of the arr array, which is out of bounds.",
			"This code will fill the arr array with the values 1 to 5, inclusive.",
			"This code will result in a compilation error because the arr array is not initialized with any values.",
			"This code will output an error message, but will not throw an exception."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int[] arr = {1, 2, 3, 4, 5}; for (int i = 0; i < arr.length; i++) { if (arr[i] == 3) { continue; } System.out.println(arr[i]); } } }",
		answer: "This code will output the elements of the arr array from index 0 to 4.",
		options: [
			"This code will compile without error, but will not output anything.",
			"This code will output the elements of the arr array from index 0 to 4.",
			"This code will result in a compilation error because the continue statement is not valid in a for loop.",
			"This code will output an error message, but will not throw an exception."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int x = 5; while (x > 0) { System.out.println(x); x--; } } }",
		answer: "This code will output the values 5, 4, 3, 2, 1, in that order",
		options: [
			"This code will output the values 5, 4, 3, 2, 1, in that order",
			"This code will output the values 0, -1, -2, -3, -4.",
			"This code will result in a compilation error because the while loop condition is not valid.",
			"This code will output an error message, but will not throw an exception."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int[] arr = {1, 2, 3, 4, 5}; for (int i = 0; i < arr.length; i++) { if (arr[i] == 3) { break; } System.out.println(arr[i]); } } }",
		answer: "This code will output the elements of the arr array from index 0 to 1",
		options: [
			"This code will output the elements of the arr array from index 0 to 1",
			"This code will output the elements of the arr array from index 0 to 2",
			"This code will result in a compilation error because the break statement is not valid in a for loop.",
			"This code will output an error message, but will not throw an exception."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int[] arr = {1, 2, 3, 4, 5}; for (int i = 0; i < arr.length; i++) { if (arr[i] == 3) { return; } System.out.println(arr[i]); } } }",
		answer: "This code will output the elements of the arr array from index 0 to 2",
		options: [
			"This code will compile without error, but will not output anything.",
			"This code will output the elements of the arr array from index 0 to 4",
			"This code will result in a compilation error because the return statement is not valid in a for loop.",
			"This code will output the elements of the arr array from index 0 to 2",
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int[] arr = new int[5]; for (int i = 1; i <= 5; i++) { arr[i] = i; } } }",
		answer: "This code will throw an ArrayIndexOutOfBoundsException because the loop condition is checking for i <= 5, which means the loop will try to access arr[5], which is beyond the bounds of the array.",
		options: [
			"This code will compile without error, but will not output anything.",
			"This code will output the values 1, 2, 3, 4, 5 to the console.",
			"This code will result in a compilation error because the loop condition is not valid.",
			"This code will throw an ArrayIndexOutOfBoundsException because the loop condition is checking for i <= 5, which means the loop will try to access arr[5], which is beyond the bounds of the array.",
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { String str = null; if (str.equals('foo')) { System.out.println('Match!'); } else { System.out.println('No match.'); } } }",
		answer: "This code will throw a NullPointerException because the variable str is null and the equals() method is being called on it.",
		options: [
			"This code will compile without error, but will not output anything.",
			"This code will output the text 'Match!' to the console.",
			"This code will output the text 'No match.' to the console.",
			"This code will throw a NullPointerException because the variable str is null and the equals() method is being called on it."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int x = 5; int y = ++x * 2; System.out.println(y); } }",
		answer: "This code will output the value 12 because the ++x operator increments the value of x before the multiplication operation is performed, resulting in (6 * 2) = 12.",
		options: [
			"This code will compile without error, but will not output anything.",
			"This code will output the value 10 to the console.",
			"This code will result in a compilation error because the ++ operator is not valid in this context.",
			"This code will output the value 12 because the ++x operator increments the value of x before the multiplication operation is performed, resulting in (6 * 2) = 12."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int x = 5; while (x > 0) { System.out.println(x); x--; } } }",
		answer: "This code will output the numbers 5, 4, 3, 2, 1 to the console because the while loop will execute as long as x is greater than 0 and will decrement x by 1 with each iteration.",
		options: [
			"This code will output the numbers 5, 4, 3, 2, 1 to the console because the while loop will execute as long as x is greater than 0 and will decrement x by 1 with each iteration.",
			"This code will output the number 5 to the console.",
			"This code will result in a compilation error because the while loop condition is not valid.",
			"This code will output an error message, but will not throw an exception."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int x = 5; if (x < 0) { System.out.println('Negative'); } else if (x == 0) { System.out.println('Zero'); } else { System.out.println('Positive'); } } }",
		answer: "This code will output the text 'Positive' to the console because x is greater than 0 and does not equal 0.",
		options: [
			"This code will compile without error, but will not output anything.",
			"This code will output the text 'Negative' to the console.",
			"This code will output the text 'Zero' to the console.",
			"This code will output the text 'Positive' to the console because x is greater than 0 and does not equal 0."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int[] arr = {1, 2, 3, 4, 5}; for (int i = 0; i < arr.length; i++) { System.out.println(arr[i]); } } }",
		answer: "This code will output the numbers 1, 2, 3, 4, 5 to the console because it is correctly accessing each element of the array using a for loop.",
		options: [
			"This code will output the numbers 1, 2, 3, 4, 5 to the console because it is correctly accessing each element of the array using a for loop.",
			"This code will output the text '12345' to the console.",
			"This code will result in a compilation error because the for loop condition is not valid.",
			"This code will output an error message, but will not throw an exception."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { String[] arr = {'apple', 'banana', 'cherry'}; for (String s : arr) { System.out.println(s); } } }",
		answer: "This code will result in a compilation error",
		options: [
			"This code will compile without error, but will not output anything.",
			"This code will output the text 'apple', 'banana', 'cherry' to the console.",
			"This code will result in a runtime error because the loop variable 's' is not properly declared.",
			"This code will result in a compilation error"
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int[] arr = {1, 2, 3, 4, 5}; for (int i = 0; i <= arr.length; i++) { System.out.println(arr[i]); } } }",
		answer: "This code will result in an ArrayIndexOutOfBoundsException.",
		options: [
			"This code will result in an ArrayIndexOutOfBoundsException.",
			"This code will output the numbers 1, 2, 3, 4, 5 to the console.",
			"This code will result in a compilation error because the for loop condition is not valid.",
			"This code will output an error message, but will not throw an exception."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int x = 5; int y = 2; double result = x / y; System.out.println(result); } }",
		answer: "This code will output the number 2.0 to the console.",
		options: [
			"This code will output the number 2.0 to the console.",
			"This code will output the number 2.5 to the console.",
			"This code will result in a compilation error because the variable types are not compatible.",
			"This code will output an error message, but will not throw an exception."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int x = 10; int y = 2; int z = x % y; System.out.println(z); } }",
		answer: "This code will output the number 0 to the console.",
		options: [
			"This code will output the number 0 to the console.",
			"This code will output the number 5 to the console.",
			"This code will result in a compilation error because the variable types are not compatible.",
			"This code will output an error message, but will not throw an exception."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { String s1 = 'Hello'; String s2 = 'World'; String s3 = s1 + s2; System.out.println(s3); } }",
		answer: "This code will result in a compilation error.",
		options: [
			"This code will result in a compilation error.",
			"This code will output the text 'HelloWorld' to the console.",
			"This code will result in a runtime error because the string concatenation operator is not properly used.",
			"This code will output an error message, but will not throw an exception."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int[] nums = {1, 2, 3, 4, 5}; for (int i = 1; i <= nums.length; i++) { System.out.println(nums[i]); } } }",
		answer: "This code will result in an ArrayIndexOutOfBoundsException.",
		options: [
			"This code will compile without error, but will not output anything.",
			"This code will output the numbers 1, 2, 3, 4, 5 to the console.",
			"This code will result in a compilation error because the variable types are not compatible.",
			"This code will result in an ArrayIndexOutOfBoundsException."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int x = 5; int y = 10; int z = y / x; System.out.println(z); } }",
		answer: "This code will output the number 2 to the console.",
		options: [
			"This code will output the number 2 to the console.",
			"This code will output the number 0.5 to the console.",
			"This code will result in a runtime error because the variables are not initialized.",
			"This code will output an error message, but will not throw an exception."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { String s1 = 'Hello'; String s2 = 'World'; String s3 = s1.concat(s2); System.out.println(s3); } }",
		answer: `This code will compile without error, but will not output anything.`,
		options: [
			"This code will output the text 'HelloWorld' to the console.",
			"This code will result in a runtime error because the string concatenation method is not properly used.",
			"This code will result in a compilation error because the variable types are not compatible.",
			`This code will compile without error, but will not output anything.`
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { String s1 = 'Hello'; String s2 = 'World'; String s3 = s1 + s2; System.out.println(s3); } }",
		answer: "This code will result in a compilation error.",
		options: [
			"This code will output the text 'HelloWorld' to the console.",
			"This code will result in a runtime error because the string concatenation operator is not properly used.",
			"This code will compile without error, but will not output anything.",
			"This code will result in a compilation error."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int[] nums = new int[5]; for (int i = 0; i < nums.length; i++) { nums[i] = i + 1; } System.out.println(nums[5]); } }",
		answer: "This code will result in an ArrayIndexOutOfBoundsException.",
		options: [
			"This code will output the number 5 to the console.",
			"This code will output the numbers 1, 2, 3, 4, 5 to the console.",
			"This code will result in a compilation error because the variable types are not compatible.",
			"This code will result in an ArrayIndexOutOfBoundsException."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int x = 5; int y = 10; double z = y / x; System.out.println(z); } }",
		answer: "This code will output the number 2.0 to the console.",
		options: [
			"This code will output the number 0.5 to the console.",
			"This code will compile without error, but will not output anything.",
			"This code will result in a runtime error because the variables are not initialized.",
			"This code will output the number 2.0 to the console.",
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int[] nums = {1, 2, 3, 4, 5}; for (int i = 0; i <= nums.length; i++) { System.out.println(nums[i]); } } }",
		answer: "This code will result in an ArrayIndexOutOfBoundsException.",
		options: [
			"This code will output the numbers 1, 2, 3, 4, 5, and then an error message.",
			"This code will output the numbers 1, 2, 3, 4, 5, and then continue running without errors.",
			"This code will result in a compilation error because the variable types are not compatible.",
			"This code will result in an ArrayIndexOutOfBoundsException."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int x = 5; int y = 10; if (x == 5) { int z = y / x; System.out.println(z); } System.out.println(z); } }",
		answer: "This code will result in a compilation error.",
		options: [
			"This code will output the number 2 to the console.",
			"This code will result in a compilation error.",
			"This code will compile without error, but will not output anything.",
			"This code will output an error message, but will not throw an exception."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int x = 5; int y = 10; if (x == 5) { double z = (double)y / x; System.out.println(z); } } }",
		answer: "This code will output the number 2.0 to the console.",
		options: [
			"This code will output the number 2.0 to the console.",
			"This code will output the number 0.5 to the console.",
			"This code will result in a runtime error because the variables are not initialized.",
			"This code will output an error message, but will not throw an exception."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int i = 0; while (i < 5) { System.out.println(i); i--; } } }",
		answer: "This code will result in an infinite loop because i is always less than 5.",
		options: [
			"This code will compile without error, but will not output anything.",
			"This code will output the numbers 0, -1, -2, -3, and -4.",
			"This code will result in an infinite loop because i is always less than 5.",
			"This code will output an error message, but will not result in an infinite loop."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int x = 5, y = 10; if (x = y) { System.out.println(\"Equal\"); } else { System.out.println(\"Not equal\"); } } }",
		answer: "This code will result in a compilation error.",
		options: [
			"This code will compile without error, but will output the message \"Not equal\".",
			"This code will compile without error, but will output the message \"Equal\".",
			"This code will result in a runtime error because the variable x is not initialized.",
			"This code will result in a compilation error."
		]
	},
	{
		question: `What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { List<String> list = new ArrayList<>(); list.add(\"Hello\"); list.add(\"World\"); for (int i = 0; i < list.size(); i++) { if (list.get(i) == \"World\") { list.remove(i); } } System.out.println(list); } }`,
		answer: `This code will not remove the element \"World\" from the list.`,
		options: [
			`This code will compile without error, but will not output anything.`,
			`This code will output the list [\"Hello\"] after removing the element \"World\".`,
			`This code will output the list [\"Hello\", \"World\"] without removing any elements.`,
			`This code will not remove the element \"World\" from the list.`,
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int[] arr = new int[5]; for (int i = 0; i <= arr.length; i++) { arr[i] = i; } } }",
		answer: "This code will throw an ArrayIndexOutOfBoundsException.",
		options: [
			"This code will throw an ArrayIndexOutOfBoundsException.",
			"This code will output the values 0, 1, 2, 3, 4, and 5.",
			"This code will result in a compilation error because the index operator is used incorrectly.",
			"This code will output an error message, but will not throw an exception."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { String s = null; if (s.equals(\"Hello\")) { System.out.println(\"Hello, world!\"); } } }",
		answer: "This code will throw a NullPointerException.",
		options: [
			"This code will compile without error, but will not output anything.",
			"This code will output the message \"Hello, world!\".",
			"This code will result in a compilation error because the variable s is not initialized.",
			"This code will throw a NullPointerException."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int[] arr = new int[5]; for (int i = 0; i < arr.length; i++) { arr[i] = i; } System.out.println(Arrays.toString(arr)); } }",
		answer: "This code will output the array [0, 1, 2, 3, 4].",
		options: [
			"This code will output the array [0, 1, 2, 3, 4].",
			"This code will output the sorted array [0, 1, 2, 3, 4].",
			"This code will result in a compilation error because the method Arrays.toString() is not used correctly.",
			"This code will output an error message, but will not result in a runtime error."
		]
	},
	{
		question: "What is the difference between an interface and an abstract class in Java?",
		answer: "An interface defines a set of methods that a class must implement, while an abstract class can provide method implementations and fields, but cannot be instantiated.",
		options: [
			"An interface is a class that can be instantiated, while an abstract class is a keyword in Java.",
			"An interface can provide method implementations and fields, while an abstract class cannot.",
			"An interface can extend multiple classes, while an abstract class can only extend one class.",
			"An interface defines a set of methods that a class must implement, while an abstract class can provide method implementations and fields, but cannot be instantiated."
		]
	},
	{
		question: `What is the difference between the "==" and "===" operators in Java?`,
		answer: `The "==" operator checks if two objects have the same value, while the "===" operator checks if two objects have the same value and type.`,
		options: [
			`The "==" operator checks if two objects have the same type, while the "===" operator checks if two objects have the same value.`,
			`The "==" operator checks if two objects have the same reference, while the "===" operator checks if two objects have the same value.`,
			`The "==" operator checks if two objects have the same value, while the "===" operator checks if two objects have the same value and type.`,
			`The "==" operator checks if two objects have the same value and type, while the "===" operator checks if two objects have the same reference.`
		]
	},
	{
		question: "What is wrong with the following Java code? int x = 5 / 0;",
		answer: "This code will throw an ArithmeticException because division by zero is not allowed.",
		options: [
			"This code will throw an ArithmeticException because division by zero is not allowed.",
			"This code will result in a compilation error because division by zero is not allowed.",
			"This code will set the value of x to 0.",
			"This code will set the value of x to infinity."
		]
	},
	{
		question: "What is wrong with the following Java code? String s = null; if (s.equals(\"hello\")) { System.out.println(\"Hello world!\"); }",
		answer: "This code will throw a NullPointerException because the variable s is null.",
		options: [
			"This code will compile without error, but will not output anything.",
			"This code will output the string \"Hello world!\".",
			"This code will result in a compilation error because the variable s is not initialized.",
			"This code will throw a NullPointerException because the variable s is null."
		]
	},
	{
		question: "What is wrong with the following Java code? public static void main(String[] args) { System.out.println(args[1]); }",
		answer: "This code will throw an ArrayIndexOutOfBoundsException.",
		options: [
			"This code will throw an ArrayIndexOutOfBoundsException.",
			"This code will output the second element of the args array.",
			"This code will result in a compilation error because the main method must have a return type.",
			"This code will output an error message, but will not throw an exception."
		]
	},
	{
		question: "What is the difference between an inner class and a nested class in Java?",
		answer: "An inner class is a non-static nested class that has access to the members of its enclosing class, while a nested class is a static nested class that does not have access to the members of its enclosing class.",
		options: [
			"An inner class is a static nested class that has access to the members of its enclosing class, while a nested class is a non-static nested class that does not have access to the members of its enclosing class.",
			"An inner class is a class that is defined inside another class, while a nested class is a class that is defined inside a method.",
			"An inner class is a non-static nested class that has access to the members of its enclosing class, while a nested class is a static nested class that does not have access to the members of its enclosing class.",
			"An inner class can only access the static members of its enclosing class, while a nested class can access both the static and non-static members of its enclosing class."
		]
	},
	{
		question: `What is the difference between the "throw" and "throws" keywords in Java?`,
		answer: `The "throw" keyword is used to throw an exception from a method or block, while the "throws" keyword is used to declare the exceptions that a method or constructor can throw.`,
		options: [
			`The "throw" keyword is used to catch an exception, while the "throws" keyword is used to rethrow an exception.`,
			`The "throw" keyword is used to create a new exception object, while the "throws" keyword is used to handle an existing exception.`,
			`The "throw" keyword is used to declare a checked exception, while the "throws" keyword is used to declare an unchecked exception.`,
			`The "throw" keyword is used to throw an exception from a method or block, while the "throws" keyword is used to declare the exceptions that a method or constructor can throw.`
		]
	},
	{
		question: "What is wrong with the following Java code? public class Person { private final String name; public Person(String name) { this.name = name; } }",
		answer: "This code is correct and will compile without error.",
		options: [
			"This code will result in a compilation error because the variable name is not initialized.",
			"This code will result in a compilation error because the constructor does not have a return type.",
			"This code will result in a compilation error because the variable name is not declared as final.",
			"This code is correct and will compile without error."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int[] arr = new int[5]; arr[5] = 10; } }",
		answer: "This code will throw an ArrayIndexOutOfBoundsException.",
		options: [
			"This code will compile without error, but will not output anything.",
			"This code will output the value 10.",
			"This code will result in a compilation error because the index operator is not used correctly.",
			"This code will throw an ArrayIndexOutOfBoundsException."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { List<String> list = new ArrayList<>(); list.add(\"Hello\"); list.add(1); System.out.println(list.get(1)); } }",
		answer: "This code will throw a ClassCastException.",
		options: [
			"This code will throw a ClassCastException.",
			"This code will output the value 1.",
			"This code will result in a compilation error because the list is not typed.",
			"This code will output an error message, but will not throw an exception."
		]
	},
	{
		question: "What is the difference between a HashSet and a TreeSet in Java?",
		answer: "A HashSet is an unordered collection of unique elements, while a TreeSet is a sorted collection of unique elements.",
		options: [
			"A HashSet is a sorted collection of unique elements, while a TreeSet is an unordered collection of unique elements.",
			"A HashSet is an unordered collection of unique elements, while a TreeSet is a sorted collection of unique elements.",
			"A HashSet uses a red-black tree for internal storage, while a TreeSet uses a hash table for internal storage.",
			"A HashSet uses a hash table for internal storage, while a TreeSet uses a binary search tree for internal storage."
		]
	},
	///////////////////////////////////////////////////////////Javascript
	{
		question: `What is the difference between the '== ' and '=== ' operators in JavaScript?`,
		answer: `The '== ' operator checks for value equality, while the '=== ' operator checks for both value and type equality.`,
		options: [
			`The '== ' operator checks for both value and type equality, while the '=== ' operator checks for value equality only.`,
			`The '== ' operator is used to assign values to variables, while the '=== ' operator is used for comparison.`,
			`The '== ' operator checks for strict equality, while the '=== ' operator checks for loose equality.`,
			`The '== ' operator checks for value equality, while the '=== ' operator checks for both value and type equality.`,
		]
	},
	{
		question: "What is the problem with the following JavaScript code? const x = 5; const y = 6; const z = x + y; console.log('The sum of ' + x + ' and ' + y + ' is ' + z);",
		answer: "There is no problem with this code.",
		options: [
			"The variables x and y are not declared.",
			"The variable z is not declared.",
			"There is a syntax error in the console.log statement.",
			"There is no problem with this code."
		]
	},
	{
		question: "Why is the following JavaScript code not working as expected? function reverseString(str) { let reversedStr = ''; for (let i = str.length - 1; i >= 0; i--) { reversedStr += str[i]; } return reversedStr; } console.log(reverseString('hello'));",
		answer: "The function is missing a return statement.",
		options: [
			"The function is not defined correctly.",
			"The for loop is not correct.",
			"The function is missing a return statement.",
			"There is no problem with this code."
		]
	},
	{
		question: "What is the problem with the following JavaScript code? const arr = [1, 2, 3, 4, 5]; const doubledArr = arr.map(num => { num * 2; }); console.log(doubledArr);",
		answer: "The function passed to the map method does not return a value.",
		options: [
			"The map method is not used correctly.",
			"The array arr is not defined.",
			"The function passed to the map method does not return a value.",
			"There is no problem with this code."
		]
	},
	{
		question: "Why is the following JavaScript code not working as expected? const myObj = { name: 'John', age: 30, occupation: 'Software Engineer' }; for (let prop in myObj) { if (myObj.hasOwnProperty(prop)) { console.log(prop + ': ' + myObj.prop); } }",
		answer: "The property is accessed incorrectly, it should be accessed using bracket notation myObj[prop] instead of myObj.prop.",
		options: [
			"The object myObj is not defined.",
			"The for...in loop is not used correctly.",
			"The property is accessed incorrectly, it should be accessed using bracket notation myObj[prop] instead of myObj.prop.",
			"There is no problem with this code."
		]
	},
	{
		question: "What is the problem with the following JavaScript code? const x = 5; if (x === 5) { let y = 10; } console.log(y);",
		answer: "The variable y is not defined outside of the if block.",
		options: [
			"The variable x is not declared.",
			"The variable y is not defined inside the if block.",
			"The variable y is not defined outside of the if block.",
			"There is no problem with this code."
		]
	},
	{
		question: "Why is the following JavaScript code not working as expected? const myArray = [1, 2, 3, 4, 5]; myArray.forEach(function(element) { console.log(element); });",
		answer: "There is no problem with this code.",
		options: [
			"The forEach method is not used correctly.",
			"The array myArray is not defined.",
			"There is a syntax error in the console.log statement.",
			"There is no problem with this code."
		]
	},
	{
		question: "What is the problem with the following JavaScript code? function multiply(x, y) { return x * y; } const result = multiply(2); console.log(result);",
		answer: "The function is not called with the correct number of arguments.",
		options: [
			"The function is not defined correctly.",
			"The variable result is not defined.",
			"The function is not called with the correct number of arguments.",
			"There is no problem with this code."
		]
	},
	{
		question: "Why is the following JavaScript code not working as expected? const myString = 'hello'; console.log(myString.reverse());",
		answer: "The string prototype method reverse() does not exist.",
		options: [
			"The string myString is not defined.",
			"There is a syntax error in the console.log statement.",
			"The string prototype method reverse() does not exist.",
			"There is no problem with this code."
		]
	},
	{
		question: "What is the problem with the following JavaScript code? const x = 5; const y = 10; const z = x + y; console.log(Z);",
		answer: "The variable Z is not defined. JavaScript is case-sensitive, so it should be lowercase z.",
		options: [
			"The variable Z is not defined. JavaScript is case-sensitive, so it should be lowercase z.",
			"The variable z is not defined.",
			"There is a syntax error in the code.",
			"There is no problem with this code."
		]
	},
	{
		question: "Why is the following JavaScript code not working as expected? function add(x, y) { return x + y; } const result = add('2', 3); console.log(result);",
		answer: "The arguments passed to the function are of different data types and cannot be added together.",
		options: [
			"The function is not defined correctly.",
			"The variable result is not defined.",
			"The arguments passed to the function are of different data types and cannot be added together.",
			"There is no problem with this code."
		]
	},
	{
		question: "What is the problem with the following JavaScript code? const myObject = { name: 'John', age: 30 }; console.log(myObject.height);",
		answer: "The property 'height' does not exist in the object.",
		options: [
			"The object myObject is not defined.",
			"The property 'height' does not exist in the object.",
			"There is a syntax error in the code.",
			"There is no problem with this code."
		]
	},
	{
		question: "Why is the following JavaScript code not working as expected? const myArray = [1, 2, 3, 4, 5]; const result = myArray.reduce(function(sum, element) { return sum + element; }, 0); console.log(result);",
		answer: "There is no problem with this code.",
		options: [
			"The reduce method is not used correctly.",
			"The array myArray is not defined.",
			"There is a syntax error in the console.log statement.",
			"There is no problem with this code."
		]
	},
	{
		question: "What is the problem with the following JavaScript code? let x = 5; x = 10; console.log(X);",
		answer: "The variable X is not defined. JavaScript is case-sensitive, so it should be lowercase x.",
		options: [
			"The variable X is not defined. JavaScript is case-sensitive, so it should be lowercase x.",
			"The variable x is not defined.",
			"There is a syntax error in the code.",
			"There is no problem with this code."
		]
	},
	{
		question: "Why is the following JavaScript code not working as expected? const myArray = [1, 2, 3, 4, 5]; const newArray = myArray.map(function(element) { return element * 2; }) console.log(newArray);",
		answer: "There is no problem with this code.",
		options: [
			"The map method is not used correctly.",
			"The array myArray is not defined.",
			"There is a syntax error in the console.log statement.",
			"There is no problem with this code."
		]
	},
	{
		question: "What is the problem with the following JavaScript code? const myFunction = function() { console.log('Hello, world!'); } myFunction(); console.log(myFunction);",
		answer: "The console.log statement will output the function code instead of executing the function.",
		options: [
			"The function myFunction is not defined.",
			"There is a syntax error in the code.",
			"The console.log statement will output the function code instead of executing the function.",
			"There is no problem with this code."
		]
	},
	{
		question: "Why is the following JavaScript code not working as expected? const myString = 'hello'; console.log(myString.toUpperCase()); console.log(myString);",
		answer: "The toUpperCase() method returns a new string and does not modify the original string.",
		options: [
			"The string myString is not defined.",
			"There is a syntax error in the console.log statement.",
			"The toUpperCase() method returns a new string and does not modify the original string.",
			"There is no problem with this code."
		]
	},
	{
		question: "What is the problem with the following JavaScript code? const myArray = [1, 2, 3, 4, 5]; myArray.forEach(function(element, index, arr) { console.log('Element: ' + element + ', Index: ' + index + ', Array: ' + arr); });",
		answer: "There is no problem with this code.",
		options: [
			"The forEach method is not used correctly.",
			"The array myArray is not defined.",
			"There is a syntax error in the console.log statement.",
			"There is no problem with this code."
		]
	},
	{
		question: "Why is the following JavaScript code not working as expected? const myFunction = () => { console.log(this); } myFunction();",
		answer: "Arrow functions do not have their own this context.",
		options: [
			"The function myFunction is not defined.",
			"There is a syntax error in the code.",
			"Arrow functions do not have their own this context.",
			"There is no problem with this code."
		]
	},
	{
		question: "What is the problem with the following JavaScript code? const myObject = { name: 'John', age: 30 }; console.log(myObject.gender);",
		answer: "The property gender does not exist on the object myObject.",
		options: [
			"The object myObject is not defined.",
			"There is a syntax error in the code.",
			"The property gender does not exist on the object myObject.",
			"There is no problem with this code."
		]
	},
	{
		question: "Why is the following JavaScript code not working as expected? const myArray = [1, 2, 3, 4, 5]; const sum = myArray.reduce(function(total, element) { return total + element; }); console.log(sum);",
		answer: "There is no initial value provided for the reduce method.",
		options: [
			"The reduce method is not used correctly.",
			"The array myArray is not defined.",
			"There is a syntax error in the console.log statement.",
			"There is no initial value provided for the reduce method."
		]
	},
	///////////////////////////////////////////////////////////C
	{
		question: "What is the difference between a pointer and a reference in C?",
		answer: "A pointer can be re-assigned, while a reference cannot be re-assigned.",
		options: [
			"A pointer can be re-assigned, while a reference cannot be re-assigned.",
			"A reference can be used without being dereferenced, while a pointer cannot be used without being dereferenced.",
			"A reference is a type of pointer, while a pointer is not a type of reference.",
			"A pointer is a type of reference, while a reference is not a type of pointer."
		]
	},
	{
		question: "In C, Which of the two is faster? 0==1 or 0==2",
		answer: "Both are equal",
		options: [
			"0==2",
			"0==8",
			"0==20",
			"Both are equal"
		]
	},
	{
		question: "What is the problem with the following C code? int main() { int x = 5, y = 0, z; z = x / y; printf('Result: %d', z); return 0; }",
		answer: "Division by zero error.",
		options: [
			"The printf statement is not formatted correctly.",
			"The variables x and y are not defined.",
			"The compiler will throw a syntax error.",
			"Division by zero error."
		]
	},
	{
		question: "What is the problem with the following C code? int main() { char str[] = 'Hello, world!'; printf('String length: %d', strlen(str)); return 0; }",
		answer: "The string should be defined with double quotes instead of single quotes.",
		options: [
			"The printf statement is not formatted correctly.",
			"The strlen function is not defined.",
			"The string should be defined with double quotes instead of single quotes.",
			"There is no problem with this code."
		]
	},
	{
		question: "What is the problem with the following C code? int main() { char str[] = 'Hello, world!'; printf('String length: %d', strlen(str)); return 0; }",
		answer: "The string should be defined with double quotes instead of single quotes.",
		options: [
			"The printf statement is not formatted correctly.",
			"The strlen function is not defined.",
			"The string should be defined with double quotes instead of single quotes.",
			"There is no problem with this code."
		]
	},
	{
		question: "What is the problem with the following C code? int main() { int arr[5] = {1, 2, 3, 4, 5}; printf('Array element: %d', arr[5]); return 0; }",
		answer: "The array index is out of bounds.",
		options: [
			"The printf statement is not formatted correctly.",
			"The array arr is not defined.",
			"The array index is out of bounds.",
			"There is no problem with this code."
		]
	},
	{
		question: "What is the problem with the following C code? int main() { int i; for (i = 0; i < 10; i++); printf('Value of i: %d', i); return 0; }",
		answer: "The semicolon at the end of the for loop statement is causing the loop to run without any instructions.",
		options: [
			"The printf statement is not formatted correctly.",
			"The for loop is not defined correctly.",
			"The variable i is not defined.",
			"The semicolon at the end of the for loop statement is causing the loop to run without any instructions."
		]
	},
	{
		question: "Inline keyword is used to define a function whose contents will be placed at the point, the c function is called. It has another use. What is it?",
		answer: "Change linkage behaviour",
		options: [
			"Change linkage behaviour",
			"Remove dependencies",
			"Optimize code performance",
			"Make code portable"
		]
	},
	{
		question: "C and C++ are, often, considered to be similar. What is the major difference between the two programming languages?",
		answer: "C++ is OOP, C is not",
		options: [
			"C++ is OOP, C is not",
			"C++ has garbage collection",
			"C++ is faster",
			"C++ has more optimizations"
		]
	},
	{
		question: "C is not OOP but struct and union allows one to design class like design. What is the major difference between struct and union features in C?",
		answer: "Union saves all its variables in same location",
		options: [
			"Union saves all its variables in same location",
			"Union is more space efficient",
			"Struct supports different data types",
			"Struct supports pointer"
		]
	},
	{
		question: "What is the difference between ++i and i++ in C?",
		answer: "++i increments the value of i and then returns the incremented value, while i++ returns the value of i and then increments it.",
		options: [
			"++i increments the value of i and then returns the incremented value, while i++ returns the value of i and then increments it.",
			"++i and i++ are identical and can be used interchangeably.",
			"++i increments the value of i, while i++ returns the incremented value of i.",
			"++i returns the value of i and then increments it, while i++ increments the value of i and then returns the incremented value."
		]
	},
	{
		question: "What is the difference between a static and a non-static variable in C?",
		answer: "A static variable retains its value between function calls, while a non-static variable does not.",
		options: [
			"A static variable retains its value between function calls, while a non-static variable does not.",
			"A non-static variable can only be accessed within the function it is declared in, while a static variable can be accessed by any function in the program.",
			"A static variable is allocated on the stack, while a non-static variable does not exist.",
			"A static variable gets no call functions."
		]
	},
	{
		question: "What is a typedef in C?",
		answer: "A typedef is a keyword in C that allows you to create a new name for a data type.",
		options: [
			"A typedef is a function that returns a pointer to another function.",
			"A typedef is a variable that stores the address of a function that can be called later in the program.",
			"A typedef is a keyword in C that allows you to create a new name for a data type.",
			"A typedef is a special type of pointer that can be used to dynamically allocate memory for data types."
		]
	},
	{
		question: "What is the difference between a stack and a heap in C?",
		answer: "In C, the stack is used for static memory allocation and dynamic memory allocation is done on the heap. The stack is typically faster than the heap but has less memory available, while the heap has more memory available but is slower than the stack.",
		options: [
			"In C, the stack is used for dynamic memory allocation and static memory allocation is done on the heap. The stack is typically slower than the heap but has more memory available, while the heap has less memory available but is faster than the stack.",
			"In C, both static and dynamic memory allocation are done on the heap. The stack and the heap are the same thing.",
			"In C, the stack is used for static memory allocation and dynamic memory allocation is done on the heap. The stack is typically faster than the heap but has less memory available, while the heap has more memory available but is slower than the stack.",
			"In C, both static and dynamic memory allocation are done on the stack. The heap is not used in C."
		]
	},
	{
		question: "What is a recursive function in C?",
		answer: "A recursive function is a function that calls itself during its execution.",
		options: [
			"A recursive function is a function that executes only once.",
			"A recursive function is a function that calls another function during its execution.",
			"A recursive function is a function that can only be called from another function.",
			"A recursive function is a function that calls itself during its execution."
		]
	},
	{
		question: "What is the difference between a macro and a function in C?",
		answer: "A macro is a preprocessor directive that replaces the text of the macro with its definition during the precompilation stage. A function is a block of code that can be called multiple times during the program's execution.",
		options: [
			"A macro is a block of code that can be called multiple times during the program's execution. A function is a preprocessor directive that replaces the text of the function with its definition during the precompilation stage.",
			"A macro is a preprocessor directive that replaces the text of the macro with its definition during the precompilation stage. A function is a special type of macro that can only be called once.",
			"A macro is a preprocessor directive that replaces the text of the macro with its definition during the precompilation stage. A function is a block of code that can be called multiple times during the program's execution.",
			"A macro is a preprocessor directive that can be used to define variables, while a function is a block of code that performs a specific task."
		]
	},
	{
		question: "What is a double pointer in C?",
		answer: "A double pointer is a pointer that points to another pointer.",
		options: [
			"A double pointer is a pointer that can point to two different memory locations at the same time.",
			"A double pointer is a pointer that is twice the size of a regular pointer.",
			"A double pointer is a special type of pointer that can be used to access elements of a two-dimensional array.",
			"A double pointer is a pointer that points to another pointer."
		]
	},
	{
		question: "What is the difference between a struct and a union in C?",
		answer: "A struct is a collection of variables of different types that are stored at different memory locations, while a union is a collection of variables that share the same memory location.",
		options: [
			"A struct is a collection of variables of different types that are stored at different memory locations, while a union is a collection of variables that share the same memory location.",
			"A struct and a union are the same thing in C.",
			"A struct is a collection of variables of the same type that are stored at different memory locations, while a union is a collection of variables of different types that share the same memory location.",
			"A struct is a collection of variables that share the same memory location, while a union is a collection of variables of different types that are stored at different memory locations."
		]
	},
	{
		question: "What is the difference between static and dynamic memory allocation in C?",
		answer: "Static memory allocation is done at compile-time and allocated memory remains the same throughout the program's execution. Dynamic memory allocation is done at runtime and the allocated memory can be changed during program execution.",
		options: [
			"Static memory allocation is done at runtime and the allocated memory can be changed during program execution. Dynamic memory allocation is done at compile-time and allocated memory remains the same throughout the program's execution.",
			"Static memory allocation is done at compile-time and allocated memory remains the same throughout the program's execution. Dynamic memory allocation is done at runtime and the allocated memory can be changed during program execution.",
			"Static memory allocation is done at runtime and the allocated memory remains the same throughout the program's execution. Dynamic memory allocation is done at compile-time and the allocated memory can be changed during program execution.",
			"Static memory allocation and dynamic memory allocation are the same thing in C."
		]
	},
	{
		question: "What is a function pointer in C?",
		answer: "A function pointer is a variable that stores the address of a function that can be called later in the program.",
		options: [
			"A function pointer is a function that returns a pointer to another function.",
			"A function pointer is a pointer that points to a variable that stores a function.",
			"A function pointer is a variable that stores the address of a function that can be called later in the program.",
			"A function pointer is a special type of pointer that can be used to dynamically allocate memory for functions."
		]
	},
	{
		question: "What is the difference between a structure and a union in C?",
		answer: "A structure is a collection of variables of different data types that are stored in separate memory locations. A union is a special data type that allows storing different data types in the same memory location.",
		options: [
			"A structure is a special data type that allows storing different data types in the same memory location. A union is a collection of variables of different data types that are stored in separate memory locations.",
			"A structure is a collection of variables of different data types that are stored in separate memory locations. A union is a special data type that allows storing different data types in the same memory location.",
			"A structure and a union are the same thing in C.",
			"A structure is a collection of variables of the same data type that are stored in separate memory locations. A union is a special data type that allows storing variables of different data types in the same memory location."
		]
	},
	{
		question: "What is the difference between a stack and a queue in C?",
		answer: "A stack is a last-in-first-out (LIFO) data structure, while a queue is a first-in-first-out (FIFO) data structure.",
		options: [
			"A stack is a last-in-first-out (LIFO) data structure, while a queue is a first-in-first-out (FIFO) data structure.",
			"A stack and a queue are the same thing in C.",
			"A stack is a first-in-first-out (FIFO)",
			"A stack is both (LIFO) and (FIFO)."
		]
	},
	///////////////////////////////////////////////////////////C++
	{
		question: `What is wrong with the following C code?\n\nint main() {\n  int i;\n  for(i = 0; i < 5; i++)\n    int j = i;\n  return 0;\n}`,
		answer: `The variable j is declared inside the for loop and is not accessible outside the loop.`,
		options: [
			`The variable i is not declared before its use in the for loop.`,
			`The variable j is declared outside the for loop and is not accessible inside the loop.`,
			`The variable j is declared inside the for loop and is not accessible outside the loop.`,
			`There is nothing wrong with the code.`
		]
	},
	{
		question: "What is the problem with the following C++ code? int main() { int x; cout << 'Enter a number: '; cin >> x cout << 'The number is: ' << x; return 0; }",
		answer: "There is a missing semicolon after the cin statement.",
		options: [
			"The cout statement is not formatted correctly.",
			"The variable x is not defined.",
			"The cin statement is not defined correctly.",
			"There is a missing semicolon after the cin statement."
		]
	},
	{
		question: "What is the problem with the following C++ code? int main() { int x = 10; if (x == 10); cout << 'The value of x is 10.'; return 0; }",
		answer: "The semicolon after the if statement is causing the code inside the if statement to run without any conditions.",
		options: [
			"The cout statement is not formatted correctly.",
			"The variable x is not defined.",
			"The if statement is not defined correctly.",
			"The semicolon after the if statement is causing the code inside the if statement to run without any conditions."
		]
	},
	{
		question: "What is the problem with the following C++ code? int main() { int arr[] = {1, 2, 3, 4, 5}; cout << 'Array element: ' << arr[5]; return 0; }",
		answer: "The array index is out of bounds.",
		options: [
			"The cout statement is not formatted correctly.",
			"The array arr is not defined.",
			"The array index is out of bounds.",
			"There is no problem with this code."
		]
	},
	{
		question: "What is the problem with the following C++ code? int main() { for (int i = 0; i < 5; i++) cout << i << endl; cout << 'The value of i is: ' << i; return 0; }",
		answer: "The variable i is out of scope outside the for loop.",
		options: [
			"The cout statement is not formatted correctly.",
			"The for loop is not defined correctly.",
			"The variable i is not defined.",
			"The variable i is out of scope outside the for loop."
		]
	},
	{
		question: "What is the problem with the following C++ code? int main() { int num = 5; while (num > 0) { cout << num << endl; num--; } cout << 'Blastoff!'; return 0; }",
		answer: "The 'Blastoff!' string should be enclosed in double quotes.",
		options: [
			"The cout statement is not formatted correctly.",
			"The while loop is not defined correctly.",
			"The variable num is not defined.",
			"The 'Blastoff!' string should be enclosed in double quotes."
		]
	},
	{
		question: "What is the problem with the following C++ code? int main() { int arr[5] = {1, 2, 3, 4, 5}; int sum = 0; for (int i = 0; i < 5; i++) { sum += arr[i] } cout << 'The sum of the array elements is: ' << sum; return 0; }",
		answer: "There is a missing semicolon after the sum += arr[i] statement.",
		options: [
			"The cout statement is not formatted correctly.",
			"The array arr is not defined.",
			"The for loop is not defined correctly.",
			"There is a missing semicolon after the sum += arr[i] statement."
		]
	},
	{
		question: "What is the problem with the following C++ code? int main() { int x = 5; if (x > 3) { int y = 10; } cout << 'The value of y is: ' << y; return 0; }",
		answer: "The variable y is out of scope outside the if statement.",
		options: [
			"The cout statement is not formatted correctly.",
			"The variable x is not defined.",
			"The if statement is not defined correctly.",
			"The variable y is out of scope outside the if statement."
		]
	},
	{
		question: "What is the problem with the following C++ code? int main() { int num; cin >> num; switch (num) { case 1: cout << 'One'; break; case 2: cout << 'Two'; break; case 3: cout << 'Three'; break; default: cout << 'Invalid number'; } return 0; }",
		answer: "The cout statements inside the switch statement should be enclosed in double quotes.",
		options: [
			"The cin statement is not defined correctly.",
			"The switch statement is not defined correctly.",
			"The variable num is not defined.",
			"The cout statements inside the switch statement should be enclosed in double quotes."
		]
	},
	{
		question: "What is the problem with the following C++ code? int main() { int num = 5; if (num = 10) { cout << 'The number is equal to 10.'; } else { cout << 'The number is not equal to 10.'; } return 0; }",
		answer: "The if statement should have two equal signs for comparison (if (num == 10)).",
		options: [
			"The variable num is not defined.",
			"The else statement is not formatted correctly.",
			"The cout statements are not formatted correctly.",
			"The if statement should have two equal signs for comparison (if (num == 10))."
		]
	},
	{
		question: "What is the problem with the following C++ code? int main() { int arr[5] = {1, 2, 3, 4, 5}; for (int i = 0; i <= 5; i++) { cout << arr[i]; } return 0; }",
		answer: "The for loop is going out of bounds of the array.",
		options: [
			"The array arr is not defined.",
			"The cout statement is not formatted correctly.",
			"The for loop is not defined correctly.",
			"The for loop is going out of bounds of the array."
		]
	},
	{
		question: "What is the problem with the following C++ code? int main() { int num1, num2, sum; cout << 'Enter two numbers: '; cin >> num1, num2; sum = num1 + num2; cout << 'The sum is: ' << sum; return 0; }",
		answer: "The comma operator in the cin statement should be changed to a double arrow operator (cin >> num1 >> num2).",
		options: [
			"The variable sum is not defined.",
			"The cout statement is not formatted correctly.",
			"The cin statement is not defined correctly.",
			"The comma operator in the cin statement should be changed to a double arrow operator (cin >> num1 >> num2)."
		]
	},
	{
		question: "What is the problem with the following C++ code? int main() { int num = 5; if (num = 5) { cout << 'The number is equal to 5.'; } else { cout << 'The number is not equal to 5.'; } return 0; }",
		answer: "The if statement should have two equal signs for comparison (if (num == 5)).",
		options: [
			"The variable num is not defined.",
			"The else statement is not formatted correctly.",
			"The cout statements are not formatted correctly.",
			"The if statement should have two equal signs for comparison (if (num == 5))."
		]
	},
	{
		question: `What is wrong with the following C code?\n\nint main() {\n  char s[10];\n  s = \"hello\";\n  return 0;\n}`,
		answer: `The array s is being assigned a string literal, which is not allowed in C.`,
		options: [
			`The array s is not declared before its use.`,
			`The array s is being assigned an integer value, which is not allowed in C.`,
			`The array s is being assigned a character value, which is not allowed in C.`,
			`The array s is being assigned a string literal, which is not allowed in C.`
		]
	},
	{
		question: `What is wrong with the following C code?\n\nint main() {\n  int i = 0;\n  while(i < 5);\n    i++;\n  return 0;\n}`,
		answer: `The semicolon at the end of the while loop is causing an infinite loop.`,
		options: [
			`The variable i is not declared before its use.`,
			`The while loop is missing its condition.`,
			`The variable i is not being incremented inside the while loop.`,
			`The semicolon at the end of the while loop is causing an infinite loop.`
		]
	},
	{
		question: "What is wrong with the following c code?\n\nint main() {\n    char str[5] = {'h', 'e', 'l', 'l', 'o'};\n    printf(\"%s\", str);\n    return 0;\n}",
		answer: "The string 'hello' in the char array str is not null-terminated, so the printf function will continue printing characters until it finds a null character in memory. This can cause unexpected behavior or a segmentation fault.",
		options: [
			"The printf function is missing a format specifier for the char array str.",
			"The char array str is not declared with the correct size to hold the string 'hello'.",
			"The string 'hello' in the char array str is not null-terminated, so the printf function will continue printing characters until it finds a null character in memory. This can cause unexpected behavior or a segmentation fault.",
			"The main function is missing a return statement."
		]
	},
	{
		question: "What is wrong with the following c code?\n\nint main() {\n    int a = 5;\n    int b = 0;\n    int c = a / b;\n    printf(\"%d\", c);\n    return 0;\n}",
		answer: "The code attempts to divide by zero, which is not allowed and will result in a runtime error.",
		options: [
			"The printf function is missing a format specifier for the variable c.",
			"The variable b is not initialized.",
			"The code attempts to divide by zero, which is not allowed and will result in a runtime error.",
			"The main function is missing a return statement."
		]
	},
	{
		question: "What is wrong with the following c code?\n\n#include <stdio.h>\n\nint main() {\n    int arr[3] = {1, 2, 3};\n    int i;\n    for (i = 0; i <= 3; i++) {\n        printf(\"%d \", arr[i]);\n    }\n    return 0;\n}",
		answer: "The for loop in the code attempts to access an element of the array that is out of bounds (arr[3]), which can cause unexpected behavior or a segmentation fault.",
		options: [
			"The printf function is missing a format specifier for the variable i.",
			"The variable i should be initialized inside the for loop.",
			"The for loop in the code attempts to access an element of the array that is out of bounds (arr[3]), which can cause unexpected behavior or a segmentation fault.",
			"The main function is missing a return statement."
		]
	},
	{
		question: "What is the difference between a const pointer and a pointer to const in C++?",
		answer: "A const pointer is a pointer whose value cannot be changed, whereas a pointer to const is a pointer that points to a constant object whose value cannot be changed.",
		options: [
			"There is no difference between them; both are pointers to const objects.",
			"A const pointer is a pointer to a constant object whose value cannot be changed, whereas a pointer to const is a pointer whose value cannot be changed.",
			"A const pointer is a pointer whose value and the value it points to cannot be changed, whereas a pointer to const is a pointer that points to a constant object whose value cannot be changed.",
			"A const pointer is a pointer whose value cannot be changed, whereas a pointer to const is a pointer that points to a constant object whose value cannot be changed."
		]
	},
	{
		question: "What is the difference between pass by value and pass by reference in C++?",
		answer: "Pass by value creates a copy of the argument passed to the function, while pass by reference passes the memory address of the argument to the function.",
		options: [
			"Pass by value creates a copy of the argument passed to the function, while pass by reference passes the memory address of the argument to the function.",
			"Pass by value passes the memory address of the argument to the function, while pass by reference creates a copy of the argument passed to the function.",
			"Pass by value and pass by reference are the same thing in C++.",
			"Pass by reference creates a copy of the argument passed to the function, while pass by value passes the memory address of the argument to the function."
		]
	},
	{
		question: "What is a destructor in C++?",
		answer: "A destructor is a special member function of a class that is called when an object of that class is destroyed.",
		options: [
			"A destructor is a special member function of a class that is called when an object of that class is destroyed.",
			"A destructor is a function that is used to allocate memory for an object of a class.",
			"A destructor is a function that is used to deallocate memory for an object of a class.",
			"A destructor is a function that is used to modify the properties of an object of a class."
		]
	},
	{
		question: "What is function overloading in C++?",
		answer: "Function overloading is when multiple functions in a class have the same name but different parameter lists.",
		options: [
			"Function overloading is when multiple functions in a class have the same name but different parameter lists.",
			"Function overloading is when a single function can return multiple values.",
			"Function overloading is when a single function can take multiple arguments.",
			"Function overloading is when a single function can be called from multiple classes."
		]
	},
	{
		question: "What is the difference between ++i and i++ in C++?",
		answer: "++i increments the value of i and then returns it, while i++ returns the value of i and then increments it.",
		options: [
			"Both increment the value of i and then return it.",
			"++i returns the value of i and then increments it, while i++ increments the value of i and then returns it.",
			"++i increments the value of i and then returns it, while i++ returns the value of i and then increments it.",
			"++i and i++ are not valid operators in C++."
		]
	},
	{
		question: "What is a lambda function in C++?",
		answer: "A lambda function is an anonymous function that can be used as a local function object.",
		options: [
			"A function that can only take a single argument.",
			"A function that can be used to allocate memory.",
			"A lambda function is an anonymous function that can be used as a local function object.",
			"An anonymous function that can be used as a local function object."
		]
	},
	{
		question: "What is the difference between a pointer and a reference in C++?",
		answer: "A pointer can be reassigned to point to different memory locations, while a reference cannot be reassigned once it is initialized.",
		options: [
			"A reference can be dereferenced like a pointer, while a pointer cannot be dereferenced.",
			"A pointer and a reference are the same thing in C++.",
			"A pointer is a variable that stores the memory address of another variable, while a reference is an alias for another variable.",
			"A pointer can be reassigned to point to different memory locations, while a reference cannot be reassigned once it is initialized.",
		]
	},
	{
		question: "What is the difference between an abstract class and an interface in C++?",
		answer: "An abstract class can have implementation details and can have data members, while an interface only defines the signatures of its member functions.",
		options: [
			"An abstract class and an interface are the same thing in C++.",
			"An abstract class can only have pure virtual functions, while an interface can have both pure virtual functions and concrete implementations.",
			"An abstract class can be instantiated, while an interface cannot be instantiated.",
			"An abstract class can have implementation details and can have data members, while an interface only defines the signatures of its member functions."
		]
	},
	{
		question: "What is the difference between 'const' and 'constexpr' in C++?",
		answer: "'const' is used to specify that a variable's value cannot be modified, while 'constexpr' is used to specify that a variable's value can be computed at compile time.",
		options: [
			"'const' and 'constexpr' are the same thing in C++.",
			"'const' is used to specify that a variable's type cannot be modified, while 'constexpr' is used to specify that a variable's value cannot be modified.",
			"'const' is used to specify that a variable's value cannot be modified, while 'constexpr' is used to specify that a variable's value can be computed at compile time.",
			"'const' is used to specify that a variable's value cannot be modified, while 'constexpr' is used to specify that a variable's value can be modified at runtime."
		]
	},
	///////////////////////////////////////////////////////////////python
	{
		question: "What is the problem with the following Python code? x = [1, 2, 3] y = x * 2",
		answer: "The result of y will be [1, 2, 3, 1, 2, 3] instead of [2, 4, 6].",
		options: [
			"The result of y will be [1, 2, 3, 1, 2, 3] instead of [2, 4, 6].",
			"The variable x is not defined.",
			"The syntax for multiplication is incorrect.",
			"The result of y will be [2, 4, 6] instead of [1, 2, 3, 1, 2, 3]."
		]
	},
	{
		question: "What is the problem with the following Python code? def my_func(x, y=2): return x + y z = my_func(1, 3, 5)",
		answer: "The function only takes two arguments, but three were passed.",
		options: [
			"The function only takes one argument, but two were passed.",
			"The function only takes two arguments, but three were passed.",
			"The syntax for defining a function is incorrect.",
			"The syntax for calling a function is incorrect."
		]
	},
	{
		question: "What is the problem with the following Python code? def my_func(x): return 2 * x y = my_func([1, 2, 3])",
		answer: "The function will raise a TypeError because the argument is a list instead of an integer or float.",
		options: [
			"The function will raise a TypeError because the argument is a list instead of an integer or float.",
			"The function will return [2, 4, 6] instead of 6.",
			"The function will return 6 instead of [2, 4, 6].",
			"The function is defined incorrectly."
		]
	},
	{
		question: "What is the output of the following python code? \nprint(list(map(lambda x: x**2, [1, 2, 3, 4, 5])))",
		answer: "[1, 4, 9, 16, 25]",
		options: [
			"[1, 4, 9, 16, 25]",
			"[2, 4, 6, 8, 10]",
			"[1, 2, 3, 4, 5]",
			"Error"
		]
	},
	{
		question: "What is the output of the following python code? \nprint(2 + 2 * 3)",
		answer: "8",
		options: [
			"6",
			"8",
			"10",
			"12"
		]
	},
	{
		question: "What is the output of the following python code? \nprint('1' + 2)",
		answer: "Error",
		options: [
			"3",
			"'3'",
			"Error",
			"'12'"
		]
	},
	{
		question: "What is the output of the following python code? \ndef my_func(a, b=2, c=3):\n    print(a, b, c)\nmy_func(1, c=5)",
		answer: "1 2 5",
		options: [
			"1 2 3",
			"1 2 5",
			"1 5 2",
			"Error"
		]
	},
	{
		question: "What is the output of the following python code? \nmy_list = [1, 2, 3, 4, 5]\nprint(my_list[1:-1])",
		answer: "[2, 3, 4]",
		options: [
			"[1, 2, 3, 4, 5]",
			"[2, 3, 4]",
			"[2, 3, 4, 5]",
			"Error"
		]
	},
	{
		question: "What is the output of the following code? \ndef add_item(my_list):\n    my_list += [1]\n    return my_list\nlist1 = [1, 2, 3, 4]\nlist2 = add_item(list1)\nprint(list1, list2)",
		answer: "[1, 2, 3, 4, 1] [1, 2, 3, 4, 1]",
		options: [
			"[1, 2, 3, 4] [1, 2, 3, 4]",
			"[1, 2, 3, 4, 1] [1, 2, 3, 4]",
			"[1, 2, 3, 4] [1, 2, 3, 4, 1]",
			"[1, 2, 3, 4, 1] [1, 2, 3, 4, 1]"
		]
	},
	{
		question: "What is the output of the following python code?\n\nx = 10\ny = 5\nx, y = y, x\nprint(x, y)",
		answer: "5 10",
		options: [
			"10 5",
			"5 10",
			"15",
			"Syntax Error"
		]
	},
	{
		question: "What is the result of the following python code?\n\na = [1, 2, 3]\nb = a\na.append(4)\nprint(b)",
		answer: "[1, 2, 3, 4]",
		options: [
			"[1, 2, 3]",
			"[1, 2, 3, 4]",
			"[4, 3, 2, 1]",
			"Syntax Error"
		]
	},
	{
		question: "What is the output of the following python code?\n\nx = 5\ny = 2\nprint(x // y)",
		answer: "2",
		options: [
			"2.5",
			"2.0",
			"3",
			"2"
		]
	},
	{
		question: "What is the output of the following python code?\n\nprint('hello'[::-1])",
		answer: "olleh",
		options: [
			"hello",
			"olleh",
			"h",
			"Syntax Error"
		]
	},
	{
		question: "What is the output of the following python code?\n\nx = [1, 2, 3]\nprint(x[-2])",
		answer: "2",
		options: [
			"1",
			"2",
			"3",
			"Syntax Error"
		]
	},
	{
		question: "What is the output of the following python code?\n\nx = {'a': 1, 'b': 2}\nprint(x.get('c', 3))",
		answer: "3",
		options: [
			"1",
			"2",
			"3",
			"Syntax Error"
		]
	},
	{
		question: "What is the output of the following python code?\n\nx = 'hello'\nprint(x.upper().count('l'))",
		answer: "2",
		options: [
			"1",
			"2",
			"3",
			"Syntax Error"
		]
	},
	{
		question: "What is the output of the following python code?\n\nx = ['a', 'b', 'c']\nx[3:] = ['d']\nprint(x)",
		answer: "['a', 'b', 'c', 'd']",
		options: [
			"['a', 'b', 'c']",
			"['a', 'b', 'c', ' ', 'd']",
			"['a', 'b', 'c', 'd', ' ']",
			"['a', 'b', 'c', 'd']"
		]
	},
	{
		question: "What is the output of the following python code?\n\nx = [1, 2, 3]\nprint(id(x))\nx += [4]\nprint(id(x))",
		answer: "The id of the list changes",
		options: [
			"The id of the list stays the same",
			"Syntax Error",
			"Runtime Error",
			"The id of the list changes"
		]
	},
	{
		question: "What is the output of the following python code?\nprint(''.join(list(map(str, range(5))))[-1])",
		answer: "4",
		options: [
			"0",
			"1",
			"3",
			"4"
		]
	},
	{
		question: "What is the output of the following python code?\nprint(2 + 2 * 2)",
		answer: "6",
		options: [
			"4",
			"6",
			"8",
			"10"
		]
	},
	{
		question: "What is the output of the following python code?\nprint(bool(()))",
		answer: "False",
		options: [
			"True",
			"False",
			"Error",
			"None"
		]
	},
	{
		question: "What is the output of the following python code?\na = [1, 2, 3]\nprint(a[::-1])",
		answer: "[3, 2, 1]",
		options: [
			"[3, 2, 1]",
			"[1, 2, 3]",
			"[2, 1, 0]",
			"[0, 1, 2, 3]"
		]
	},
	{
		question: "What is the output of the following python code?\nimport math\nprint(math.ceil(-5.5))",
		answer: "-5",
		options: [
			"-5",
			"-6",
			"5",
			"6"
		]
	},
	{
		question: "What is the output of the following python code?\ndef test(a, b=[]):\n    b.append(a)\n    return b\nprint(test(1))\nprint(test(2))\nprint(test(3))",
		answer: "[1, 2, 3]",
		options: [
			"[1, 2, 3]",
			"[1, 2]",
			"[1, 3]",
			"[1]"
		]
	},
	{
		question: "What is the output of the following python code?\ndef outer():\n    x = 1\n    def inner():\n        print(x)\n    inner()\nouter()",
		answer: "1",
		options: [
			"0",
			"1",
			"Error",
			"None"
		]
	},
	{
		question: "What is the output of the following python code?\na = [1, 2, 3]\nb = a\nb += [4, 5]\nprint(a)",
		answer: "[1, 2, 3, 4, 5]",
		options: [
			"[1, 2, 3]",
			"[1, 2, 3, 4, 5]",
			"[1, 2, 3, [4, 5]]",
			"[1, 2, 3, [4], [5]]"
		]
	},
	{
		question: "What is the output of the following python code?\ndef foo(a, b, c):\n    print(a, b, c)\nt = (1, 2, 3)\nfoo(*t)",
		answer: "1 2 3",
		options: [
			"1 2 3",
			"1 (2, 3)",
			"1 1 2 3",
			"1 2 2 3"
		]
	},
	{
		question: "What is the difference between a deep copy and a shallow copy in Python?",
		answer: "A shallow copy creates a new object which stores the reference of the original elements. In contrast, a deep copy creates a new object and recursively adds the copies of nested objects as well.",
		options: [
			"A shallow copy creates a new object which stores the reference of the original elements. In contrast, a deep copy creates a new object and copies the values of the original object.",
			"A shallow copy creates a new object and recursively adds the copies of nested objects as well. In contrast, a deep copy creates a new object which stores the reference of the original elements.",
			"A shallow copy creates a new object and copies the values of the original object. In contrast, a deep copy creates a new object and recursively adds the copies of nested objects as well.",
			"A shallow copy creates a new object which stores the reference of the original elements. In contrast, a deep copy creates a new object and recursively adds the copies of nested objects as well.",
		]
	},
	{
		question: "What is a lambda function in Python?",
		answer: "A lambda function is a small, anonymous function in Python that can have any number of arguments, but can only have one expression.",
		options: [
			"A lambda function is a small, anonymous function in Python that can have any number of arguments, but can only have one statement.",
			"A lambda function is a large, named function in Python that can have any number of arguments, but can only have one expression.",
			"A lambda function is a small, anonymous function in Python that can have only one argument, and can only have one expression.",
			"A lambda function is a small, anonymous function in Python that can have any number of arguments, but can only have one expression."
		]
	},
	{
		question: "What is the difference between a tuple and a list in Python?",
		answer: "A tuple is immutable, meaning it cannot be changed once created, whereas a list is mutable and can be changed.",
		options: [
			"A tuple is mutable, meaning it can be changed, whereas a list is immutable and cannot be changed.",
			"A tuple is ordered, meaning it maintains the order of its elements, whereas a list is unordered and does not maintain the order of its elements.",
			"A tuple is immutable, meaning it cannot be changed once created, whereas a list is mutable and can be changed.",
			"A tuple can only store elements of the same data type, whereas a list can store elements of different data types."
		]
	},
	{
		question: "What is a decorator in Python?",
		answer: "A decorator is a design pattern in Python that allows a user to add new functionality to an existing object or function without modifying its structure.",
		options: [
			"A decorator is a function in Python that adds new functionality to an existing object or function by modifying its structure.",
			"A decorator is a design pattern in Python that allows a user to add new functionality to an existing object or function without modifying its structure.",
			"A decorator is a class in Python that adds new functionality to an existing object or function by modifying its structure.",
			"A decorator is a function in Python that replaces an existing object or function with a new one."
		]
	},
	{
		question: "What is the difference between a tuple and a list in Python?",
		answer: "A tuple is immutable, while a list is mutable.",
		options: [
			"A tuple is ordered, while a list is not ordered.",
			"A tuple can contain any type of object, while a list can only contain objects of the same type.",
			"A tuple can be modified after creation, while a list cannot be modified.",
			"A tuple is immutable, while a list is mutable."
		]
	},
	{
		question: "What is the output of the following python code? \nprint(len('Python') + len([1, 2, 3]))",
		answer: "9",
		options: [
			"5",
			"6",
			"7",
			"9"
		]
	},
	{
		question: "What is the output of the following python code? \nprint([x * x for x in range(10) if x % 2 == 0])",
		answer: "[0, 4, 16, 36, 64]",
		options: [
			"[0, 2, 4, 6, 8]",
			"[0, 1, 4, 9, 16, 25, 36, 49, 64, 81]",
			"[1, 3, 5, 7, 9]",
			"[0, 4, 16, 36, 64]"
		]
	},
	{
		question: "What is the output of the following python code? \nprint('Python'[::-1])",
		answer: "nohtyP",
		options: [
			"P",
			"Py",
			"Pth",
			"nohtyP"
		]
	},
	{
		question: "What does the 'pass' keyword do in Python?",
		answer: "It is a null operation that does nothing.",
		options: [
			"It stops the execution of the program.",
			"It raises an exception.",
			"It defines a function.",
			"It is a null operation that does nothing."
		]
	},
	{
		question: "What is the difference between 'is' and '==' in Python?",
		answer: "'is' checks if two variables refer to the same object in memory, while '==' checks if two variables have the same value.",
		options: [
			"'is' checks if two variables have the same value, while '==' checks if two variables refer to the same object in memory.",
			"'is' checks if two variables refer to the same object in memory, while '==' checks if two variables have the same value.",
			"'is' and '==' are both used for type checking in Python.",
			"'is' and '==' are both used to compare two objects in Python."
		]
	},
	{
		question: "What is the output of the following python code: ' '.join(['1', '2', '3', '4'])?",
		answer: "'1 2 3 4'",
		options: [
			"'1234'",
			"'1, 2, 3, 4'",
			"'1\n2\n3\n4'",
			"'1 2 3 4'"
		]
	},
	{
		question: "What is the difference between a list and a tuple in Python?",
		answer: "A list is mutable, while a tuple is immutable.",
		options: [
			"A list is ordered, while a tuple is not ordered.",
			"A list can only contain strings, while a tuple can contain any data type.",
			"A list is faster than a tuple for large data sets.",
			"A list is mutable, while a tuple is immutable."
		]
	},
	{
		question: "What is the output of the following python code: [x * x for x in range(5)]?",
		answer: "[0, 1, 4, 9, 16]",
		options: [
			"[0, 1, 2, 3, 4]",
			"[1, 2, 3, 4, 5]",
			"[0, 2, 4, 6, 8]",
			"[0, 1, 4, 9, 16]"
		]
	},
	{
		question: "What is the output of the following python code: 'hello world'.split()?",
		answer: "['hello', 'world']",
		options: [
			"'hello world'",
			"['hello', 'world']",
			"'h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd'",
			"'helloworld'"
		]
	},
	{
		question: "What is the output of the following python code: 10 / 3?",
		answer: "3.3333333333333335",
		options: [
			"3",
			"3.0",
			"3.333",
			"3.3333333333333335"
		]
	},
	{
		question: "What is the difference between 'append' and 'extend' in Python lists?",
		answer: "'append' adds a single element to the end of a list, while 'extend' adds multiple elements to the end of a list.",
		options: [
			"'append' adds multiple elements to the end of a list, while 'extend' adds a single element to the end of a list.",
			"'append' and 'extend' are interchangeable and do the same thing.",
			"'append' and 'extend' are used to remove elements from a list.",
			"'append' adds a single element to the end of a list, while 'extend' adds multiple elements to the end of a list."
		]
	},
	{
		question: "What is the output of the following python code? x = [1, 2, 3]\nprint(x[3])",
		answer: "IndexError",
		options: [
			"1",
			"2",
			"3",
			"IndexError"
		]
	},
	{
		question: "What is the output of the following python code? x = 5\nif x == 5:\n print('x is equal to 5')",
		answer: "x is equal to 5",
		options: [
			"x is equal to 5",
			"x",
			"5",
			"None"
		]
	},
	{
		question: "What is the output of the following python code? x = 5\nif x > 10:\n print('x is greater than 10')\nelse:\n print('x is less than or equal to 10')",
		answer: "x is less than or equal to 10",
		options: [
			"x is greater than 10",
			"x is less than or equal to 10",
			"10",
			"None"
		]
	},
	{
		question: "What is the output of the following python code? x = 'hello'\nfor i in x:\n print(i)",
		answer: "h e l l o",
		options: [
			"hello",
			"h e l l o",
			"helloworld",
			"None"
		]
	},
	{
		question: "What is the output of the following python code? x = 10\nwhile x > 0:\n print(x)\n x -= 1",
		answer: "10 9 8 7 6 5 4 3 2 1",
		options: [
			"10",
			"9",
			"8",
			"10 9 8 7 6 5 4 3 2 1"
		]
	}
];

////////To shuffle the the answers
function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

let quizarray = [];
let remainingQuestions = [...questions]; // make a copy of the questions array
for (let i = 0; i < 100; i++) {
	let randomIndex = Math.floor(Math.random() * remainingQuestions.length);
	let randomQuestion = remainingQuestions[randomIndex];
	remainingQuestions.splice(randomIndex, 1); // remove selected question from remainingQuestions
	let shuffledOptions = shuffleArray(randomQuestion.options.slice());
	randomQuestion.options = shuffledOptions;
	quizarray.push(randomQuestion);
	if (remainingQuestions.length === 0) {
		remainingQuestions = [...questions]; // reset remainingQuestions if all questions have been used
	}
}