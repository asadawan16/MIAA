import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { fadeInUp, staggerContainer, staggerItem } from "../../../lib/motion"
import { Plus, X } from "lucide-react"

import jumaanaAbdu          from "../../../assets/images/Homepage/SMWF/panellists/jumaana-abdu.jpg"
import michaelMohammedAhmad from "../../../assets/images/Homepage/SMWF/panellists/michael-mohammed-ahmad.jpg"
import zohraAly             from "../../../assets/images/Homepage/SMWF/panellists/zohra-aly.png"
import mirelaCufurovic      from "../../../assets/images/Homepage/SMWF/panellists/mirela-cufurovic.png"
import saharDandan          from "../../../assets/images/Homepage/SMWF/panellists/sahar-dandan.jpg"
import winnieDunn           from "../../../assets/images/Homepage/SMWF/panellists/winnie-dunn.png"
import eugeniaFlynn         from "../../../assets/images/Homepage/SMWF/panellists/eugenia-flynn.jpg"
import zeynabGamieldien     from "../../../assets/images/Homepage/SMWF/panellists/zeynab-gamieldien.jpg"
import peterGould           from "../../../assets/images/Homepage/SMWF/panellists/peter-gould.jpg"
import georgeGreen          from "../../../assets/images/Homepage/SMWF/panellists/george-green.jpg"
import edaGunaydin          from "../../../assets/images/Homepage/SMWF/panellists/eda-gunaydin.png"
import bilalHafda           from "../../../assets/images/Homepage/SMWF/panellists/bilal-hafda.jpg"
import mohamedHassan        from "../../../assets/images/Homepage/SMWF/panellists/mohamed-hassan.jpg"
import amaniHaydar          from "../../../assets/images/Homepage/SMWF/panellists/amani-haydar.jpg"
import nourHaydar           from "../../../assets/images/Homepage/SMWF/panellists/nour-haydar.jpg"
import hudaHayek            from "../../../assets/images/Homepage/SMWF/panellists/huda-hayek.png"
import naimaIbrahim         from "../../../assets/images/Homepage/SMWF/panellists/naima-ibrahim.png"
import soalihaIqbal         from "../../../assets/images/Homepage/SMWF/panellists/soaliha-iqbal.jpg"
import zuleyhaKeskin        from "../../../assets/images/Homepage/SMWF/panellists/zuleyha-keskin.jpg"
import lyebaKhan            from "../../../assets/images/Homepage/SMWF/panellists/lyeba-khan.png"
import melatiLum            from "../../../assets/images/Homepage/SMWF/panellists/melati-lum.jpg"
import annieMccann          from "../../../assets/images/Homepage/SMWF/panellists/annie-mccann.jpg"
import omarMusa             from "../../../assets/images/Homepage/SMWF/panellists/omar-musa.jpg"
import aaminaMusthafa       from "../../../assets/images/Homepage/SMWF/panellists/aamina-musthafa.png"
import mehmetOzalp          from "../../../assets/images/Homepage/SMWF/panellists/mehmet-ozalp.jpg"
import safiahRind           from "../../../assets/images/Homepage/SMWF/panellists/safiah-rind.jpg"
import sanyaRushdi          from "../../../assets/images/Homepage/SMWF/panellists/sanya-rushdi.jpg"
import samahSabawi          from "../../../assets/images/Homepage/SMWF/panellists/samah-sabawi.jpg"
import saraSaleh            from "../../../assets/images/Homepage/SMWF/panellists/sara-saleh.jpg"
import nurShkembi           from "../../../assets/images/Homepage/SMWF/panellists/nur-shkembi.jpg"
import annaThwaites         from "../../../assets/images/Homepage/SMWF/panellists/anna-thwaites.jpg"
import julideTurker         from "../../../assets/images/Homepage/SMWF/panellists/julide-turker.png"
import jihadYassine         from "../../../assets/images/Homepage/SMWF/panellists/jihad-yassine.png"

const SECTION_BG = "#F3EFEB"
const INK         = "#124039"
const LIME        = "#CBCE58"

const PANELLISTS = [
  {
    name: "Jumaana Abdu",
    role: "Award-winning Author",
    image: jumaanaAbdu,
    bio: "Jumaana Abdu is the author of Translations (Vintage) which was shortlisted for the Stella Prize, the MUD Literary Prize, the Readings New Australian Fiction Prize and a NSW Premier's Literary Award. Her widely published fiction and essays have won the Dal Stivens Award, the Patricia Hackett Prize, and the Phoebe Journal fiction prize. During the day, she is a medical doctor.",
  },
  {
    name: "Michael Mohammed Ahmad",
    role: "Award-winning Novelist",
    image: michaelMohammedAhmad,
    bio: "Michael Mohammed Ahmad is the founding director of Sweatshop Literacy Movement and the author of three award-winning novels: The Tribe (Giramondo, 2014), The Lebs (Hachette, 2018) and The Other Half of You (Hachette, 2021). He is also the editor of several critically acclaimed anthologies, including After Australia (Affirm Press, 2020). Mohammed received his Doctorate of Creative Arts from Western Sydney University in 2017. His fourth novel Bugger is out in January 2026.",
  },
  {
    name: "Zohra Aly",
    role: "Freelance Writer",
    image: zohraAly,
    bio: "Zohra Aly lives in Sydney on Dharug land with her husband and four children. She worked as a hospital pharmacist for several years before writing freelance for newspapers and magazines. Zohra has an MA in Creative Writing and her essays and fiction have appeared in various literary journals and anthologies.",
  },
  {
    name: "Mirela Cufurovic",
    role: "Book Review Editor & Historian",
    image: mirelaCufurovic,
    bio: "Mirela Cufurovic is a book reviews editor for History Australia and the founding editor of The Australian Muslim Review. She is part of the Sweatshop Literacy Movement and sits on the board for The Suburban Review. She has published with Griffith Review, Sudo Journal, Mona Magazine as well as Oral History Australia, Public History Review and the Chicago Journal of History. She also spends her time in conversation with Australian authors and historians about their writing lives on Instagram as part of Tea Time with Mirela.",
  },
  {
    name: "Sahar Dandan",
    role: "Poet, CEO & Community Advocate",
    image: saharDandan,
    bio: "Sahar Dandan is a chemical engineer by training and a sustainability-driven executive by vocation. She holds a double degree in chemical engineering and science from the University of Sydney. Her passion for community development led her to shift careers, however, and she began creating programs for young refugees, Muslim women, and minority communities. Alongside her professional and community work, Sahar continues to pursue studies in Islamic sciences and teach Islamic texts. She is currently the CEO of Greendale Garden Cemetery, where she leads efforts to integrate traditional burial practices with eco-conscious design. Sahar began writing poetry at an early age, and this is her first published collection. This book is written at the gentle urging of her friends, who thought the world would enjoy her work as much as they do. She currently lives in Sydney, Australia, with her family and an ever-revolving menagerie of foster animals.",
  },
  {
    name: "Winnie Dunn",
    role: "Award-winning Author & Editor",
    image: winnieDunn,
    bio: "Winnie Dunn is Tongan-Australian writer from Mount Druitt. She is the general manager of Sweatshop Literacy Movement and the editor of several acclaimed anthologies, including Brownface (Cordite, 2018), Sweatshop Women (Sweatshop, 2019), Straight-Up Islander (SBS, 2020) and Another Australia (Affirm Press, 2022). Winnie's debut novel, Dirt Poor Islanders (Hachette 2024) won the 2025 Sydney Morning Herald Best Young Novelists Award and the 2025 Creative Australia Kathleen Mitchell Award. Dirt Poor Islanders was also shortlisted for two NSW Premier's Literary Awards and shortlisted for the Miles Franklin Literary Award.",
  },
  {
    name: "Eugenia Flynn",
    role: "Writer",
    image: eugeniaFlynn,
    bio: "Eugenia Flynn is a Larrakia, Tiwi, Chinese Malaysian and Muslim writer, creative and researcher. Her creative practice explores narratives of truth, grief, and devastation, interwoven with explorations of race and gender. Eugenia's essays, short stories and poems appear in Hello Keanu! A Poetry Anthology, IndigenousX, Peril, and Meanjin, and her text work has been exhibited in SOULfury at Bendigo Art Gallery and Five Acts of Love at ACCA. She has published essays for arts institutions and publications such as ACMI, MCA, the Print Council of Australia, fine print, Art + Australia, and Newcastle Art Gallery.",
  },
  {
    name: "Zeynab Gamieldien",
    role: "Award-winning Novelist",
    image: zeynabGamieldien,
    bio: "Zeynab Gamieldien is a writer whose first novel, The Scope of Permissibility, won the inaugural WestWords/Ultimo Prize and was published by Ultimo Press in 2023. Her second novel, Learned Behaviours, was published in 2025 by Ultimo Press. Her work has been featured in publications such as The Griffith Review and The Guardian.",
  },
  {
    name: "Peter Gould",
    role: "Designer, Author & Entrepreneur",
    image: peterGould,
    bio: "Peter Gould is a designer, author, and entrepreneur recognised for pioneering heart-centred design. As founder of Gould Studio, he has led creative projects for clients including Apple, Google, and culturally driven startups. His bestselling book, The Heart of Design, explores how spiritual values can inform leadership and innovation in the creative industries. Peter is a UNHCR Ambassador and a recipient of the Stanford Certificate in Innovation & Entrepreneurship. His work has been featured in global media and exhibitions, and he regularly speaks at international conferences on design, spirituality, and values-based creative practice.",
  },
  {
    name: "George Green",
    role: "Children's Author & Youth Advocate",
    image: georgeGreen,
    bio: "George Green is an African American children's book author, motivational speaker, and youth advocate based in Australia. He has worked in youth justice, education, and the music industry, using storytelling to empower young people and promote positive change. He is the co-founder of Little Global People, a creative platform producing books, educational games, and workshops that celebrate culture, identity, and representation.",
  },
  {
    name: "Eda Gunaydin",
    role: "Essayist, Critic & Parramatta Laureate",
    image: edaGunaydin,
    bio: "Eda Gunaydin is a Turkish-Australian essayist, critic and short story writer from Western Sydney. Her writing explores class, intergenerational trauma and futurity. She has been published widely in publications including Meanjin, HEAT, Sydney Review of Books, Cordite, and others. Her debut essay collection Root & Branch: Essays on Inheritance (NewSouth Publishing) won the 2023 Victorian Premier's Literary Award for Non-Fiction, and was shortlisted for the 2023 Australian Book Industry Awards' Matt Richell Award for New Writer of the Year. In 2025, she was the UTS x Copyright Agency New Writers' Fellow, and in 2026-7 she is the Parramatta Laureate in Literature. She is a Lecturer at the University of Wollongong, and lives on Wangal land.",
  },
  {
    name: "Bilal Hafda",
    role: "Poet, Educator & Community Facilitator",
    image: bilalHafda,
    bio: "Bilal Hafda is a Sydney-based poet, educator, and community arts facilitator. His work weaves language, identity, and culture, creating spaces where stories can be told and retold. Bilal has performed widely and nurtured many emerging voices through his teaching and workshops.",
  },
  {
    name: "Mohamed Hassan",
    role: "Award-winning Poet, Journalist & Podcaster",
    image: mohamedHassan,
    bio: "Mohamed Hassan is an award-winning journalist and writer from Auckland and Cairo. He is the author of How to be (a Bad) Muslim (Penguin 2022) and National Anthem (NZ National Book Award nominee) and the creator of the SKY Originals comedy series Miles From Nowhere. In 2015 he won the New Zealand National Poetry Slam and placed 2nd at the 2021 UK National Slam, and has performed his work internationally. As a journalist, his investigative series Public Enemy was awarded the Gold Trophy at the New York Festivals Radio Awards, and his coverage of the Middle East and North Africa received two Lovie Awards. He currently hosts the geopolitics show Pinch Point for Al Jazeera.",
  },
  {
    name: "Amani Haydar",
    role: "Award-winning Writer-Artist",
    image: amaniHaydar,
    bio: "Amani Haydar is an author, visual artist, and advocate for women's health and safety based on Dharug land. Amani's ground-breaking feminist memoir The Mother Wound (Pan Macmillan, 2021) explores the effects of domestic abuse and state-sanctioned violence on women and has received several awards including the 2022 Victorian Premier's Literary Award for Non-fiction and the 2022 Matt Richell Award for New Writer of the Year. The Mother Wound has recently been translated into Arabic, allowing audiences worldwide to engage with the Arab-Australian experience. Amani's writing has also been featured in anthologies including Admissions: Voices within Mental Health (Upswell), Another Australia (Affirm Press), Racism (Sweatshop) and Arab Australian Other (Pan Macmillan).",
  },
  {
    name: "Nour Haydar",
    role: "Senior Producer & Podcast Co-host",
    image: nourHaydar,
    bio: "Nour Haydar is co-host and senior-producer of Guardian Australia's daily news podcast Full Story. Before joining the Guardian, Nour was a federal politics reporter in Canberra for the ABC and a fill-in presenter on ABC News Breakfast and Afternoon Briefing.",
  },
  {
    name: "Huda Hayek",
    role: "Award-winning Children's Author",
    image: hudaHayek,
    bio: "Huda Hayek is the second-youngest of seven children, born to Lebanese-Australian parents. She is author of CBCA Shortlisted Book of the Year 'Huda and Me' and CBCA Honour Book of the Year 'Huda Was Here'. H. Hayek struggled with reading and writing through her earliest years at school, but knew from the time she was a little girl that she wanted to work with words. After completing a degree in Mass Communication (Journalism & Public Relations) she went on to graduate with a degree in Teaching. She has worked as a primary school teacher in Melbourne's west and as a journalist. But above all, writing stories involving unique kids, with unique backgrounds, has been her passion. H. Hayek enjoys speaking to Aussie kids from all backgrounds about storytelling while exploring themes of identity - what it means to be Australian, Muslim, and Lebanese. She also enjoys being a little bit mischievous.",
  },
  {
    name: "Naima Ibrahim",
    role: "Emerging Author",
    image: naimaIbrahim,
    bio: "Naima Ibrahim is a Somali-Australian writer living and working on Dharug country. Her work has appeared in Collisions, dichōtomi, Kill Your Darlings, Red Room Poetry, Sweatshop Women: Volume One and ZineWest'19. She has been shortlisted for the Monash Prize in Creative Writing and The Kat Muscat Fellowship. She has also been longlisted for the Liminal Fiction Prize. Naima was the recipient of the 2020 Heyman Mentorship Award and is currently working on her debut novel.",
  },
  {
    name: "Soaliha Iqbal",
    role: "Freelance Writer, Journalist & Podcaster",
    image: soalihaIqbal,
    bio: "Soaliha Iqbal is a freelance writer, journalist, podcast host and content creator who has worked in Australian media for six years. She has a background in youth journalism and was nominated for Young Writer of the Year at the 2023 Mumbrella Publish Awards. She has appeared on BBC Radio, ABC Sydney Radio, FBi Radio, Triple J and Blueprint for Living to discuss race politics and current affairs in Australia, and also facilitated and appeared on panels at various events including Muslim Agenda and SBS Insight. She currently works as social media editor for Ette Media.",
  },
  {
    name: "Dr Zuleyha Keskin",
    role: "Writer, Educator & Speaker",
    image: zuleyhaKeskin,
    bio: "Zuleyha Keskin is a writer, educator and speaker whose work explores Islamic spirituality, inner peace, and the human search for meaning. She is the author of Your Journey to Inner Peace, a reflective and spiritually grounded book that draws on Qur'anic wisdom, the Prophetic example and lived experience to explore how placing Allah at the centre of one's life nurtures resilience and tranquillity amid life's challenges. She is also the author of Qur'anic Concepts in Islamic Psychology and Spirituality. Zuleyha is Associate Head of School at the Centre for Islamic Studies and Civilisation at Charles Sturt University, where she lectures in Islamic spirituality. She is a co-founder of ISRA Academy, Editor-in-Chief of the Australian Journal of Islamic Studies, and Vice-President of the Australian Association of Islamic and Muslim Studies.",
  },
  {
    name: "Lyeba Khan",
    role: "Actor, Filmmaker & Educator",
    image: lyebaKhan,
    bio: "Lyeba Khan is an Australian actor, filmmaker and educator whose work sits at the intersection of artistic expression and a deep commitment to social justice. She is the Creative Director of Spaghettifish Productions, a collective that platforms Muslim voices and stories on screen and stage. Lyeba is active across both Sydney and Toronto's Muslim communities and media sectors. Her work includes producing charity shows, youth mentorship programs, and arts-based initiatives that promote community advocacy and spiritual strength. Her notable screen credits include writer/presenter on ABC's 'Behind the News', actor in Screen Australia's 'Salma's Season' and voice over artist for the animated kids show 'Zaky & Friends'. She also draws on her academic background in Islamic scholarship, history and languages to drive meaningful conversations through her community initiatives.",
  },
  {
    name: "Melati Lum",
    role: "Children's Author & Publisher",
    image: melatiLum,
    bio: "Melati Lum is the author of the Ayesha Dean Mysteries series for middle-graders, with work published in Liminal Magazine and SBS Voices. She is a former criminal law prosecutor of major crime, who now spends time thinking up fictional offences and misdeeds. Under her independent label, Melby Rose Publishing, she has published the debut middle-grade adventure novel by Annie McCann, My Harimau King; is adapting one of her books into a manga; and has released several colouring books. In 2024, she was shortlisted for the South Australian Literary Fellowship.",
  },
  {
    name: "Annie McCann",
    role: "Author & Emcee",
    image: annieMccann,
    bio: "Annie McCann is an Indonesian-Australian author and emcee from Western Sydney. The founder of multiple literary networks and published author of multiple short stories, Annie is passionate about diversity and representation in books, media and pop culture and works tirelessly to 'bridge the gap' in the creative space. On her limited days off, Annie is either slaying her reading pile while jamming to Michael Jackson's greatest hits or cheering on her NRL football team, the Parramatta Eels. My Harimau King, published by Melby Rose Publishing, is her debut novel.",
  },
  {
    name: "Omar Musa",
    role: "Author, Poet & Visual Artist",
    image: omarMusa,
    bio: "Omar Musa is an author, visual artist and poet from Queanbeyan, Australia. He has written two novels (including Fierceland), three books of poetry, five hip-hop records, and two plays, Since Ali Died and The Offering (A Plastic Ocean Oratorio). His work has appeared in The Best Australian Stories and Best of Australian Poems. His debut novel Here Come the Dogs was long-listed for the International Dublin Literary Award and Miles Franklin Award and he was named one of the Sydney Morning Herald's Young Novelists of the Year in 2015. He has had several solo exhibitions of his woodcuts, including his most recent collection All My Memories Are Mistranslations.",
  },
  {
    name: "Aamina Musthafa",
    role: "Multimedia Artist",
    image: aaminaMusthafa,
    bio: "Aamina is a Western Sydney based multimedia artist who has been dwelling between poetry and photography since 2016. Her writing explores the domestic lives of young South Asian women, navigating the tug of war between cultural inheritance and Western upbringing. Her photography operates as an extension of living, quiet, observational, and rooted in everyday moments blurring the line between documentation and reflection.",
  },
  {
    name: "Prof Mehmet Ozalp",
    role: "Award-winning Professor of Islamic Studies",
    image: mehmetOzalp,
    bio: "Prof Mehmet Ozalp is an award-winning professor of Islamic studies, public intellectual and most-respected community leader with three decades of community service. He is the founder and Head of School for the Centre for Islamic Studies and Civilisation (CISAC) at Charles Sturt University. In 2009, Mehmet founded ISRA, Islamic Sciences and Research Academy and is the serving Executive Director. Mehmet is the founder and editor-in-chief of the Australian Journal of Islamic Studies. Mehmet is the author of more than 50 publications including six books. Mehmet was awarded Australian Bluestar Award in Education (2011) and Charles Sturt University Professional Excellence Award (2012), Australian Muslim Role Model of the Year award (2012), Australian Muslim Lifetime Achievement Award (2018) and CSU Teaching Scholar of the Year (2023).",
  },
  {
    name: "Safiah Rind",
    role: "Storyteller & Multimedia Artist",
    image: safiahRind,
    bio: "Storyteller and multimedia artist, Safiah Rind is a Badimaya Yamatji and Baloch artist based in Naarm (Melbourne). Capturing, filming, designing and building stories of country, connection, and culture is at the core of her work. Safiah has experience in communications, content creating and multi-media productions. In the last year she has been working on a children's web series and is the Communications Manager for Australian Indigenous Psychologists Association.",
  },
  {
    name: "Sanya Rushdi",
    role: "Author & Illustrator",
    image: sanyaRushdi,
    bio: "Sanya is the middle of three daughters of Ali Ahmed Rushdi and Sultana Rushdi. She completed most of her primary schooling in Dhaka, Bangladesh, and part of her primary schooling in Australia. She completed her secondary and tertiary education mostly in Melbourne, Australia, where she has been living since 1989. She also completed part of her higher education in Sydney, Australia, where she lived for almost three years. She is interested in developmental psychology and the work of the later Ludwig Wittgenstein. Sanya likes to sketch, do illustrative artwork, listen to music, and engage in philosophical thinking. 'Hospital' is her first novel.",
  },
  {
    name: "Dr Samah Sabawi",
    role: "Award-winning Playwright, Poet & Scholar",
    image: samahSabawi,
    bio: "Samah Sabawi is an author, playwright and poet and a recipient of multiple awards both nationally and internationally. Her theatre credits include the critically acclaimed and award-winning plays Tales of a City by the Sea and THEM. In 2020 Samah received the prestigious Green Room Award for Best Writing in the independent theatre category, and was shortlisted for both the NSW and Victorian Premier's Literary Awards. Samah received a Doctor of Philosophy from Victoria University for her thesis titled Inheriting Exile, Transgenerational Trauma and the Palestinian Australian Identity.",
  },
  {
    name: "Sara Saleh",
    role: "Award-winning Writer & Human Rights Lawyer",
    image: saraSaleh,
    bio: "Sara Saleh is an award-winning writer, race critical human rights lawyer, and the daughter of Palestinian, Lebanese and Egyptian migrants based on Darug land/Western Sydney. Her poems, prose, and essays have been published in English and Arabic across dozens of literary platforms, and she has led workshops in countless classrooms, community spaces, and festivals around the world from Brooklyn to Beirut. Her debut novel, Songs for the Dead and the Living (Affirm, 2023), and her poetry collection, The Flirtation of Girls (UQP, 2023), have received multiple national and international prizes and shortlistings between them. Sara made history as the first poet to win both the 2021 Peter Porter Poetry Prize and the 2020 Judith Wright Poetry Prize. Rooted in the belief that literacy is a tool for liberation, Sara has rallied communities of artists across continents to create generative, inclusive spaces for craft, connection, and critical consciousness.",
  },
  {
    name: "Dr Nur Shkembi OAM",
    role: "Award-winning Curator, Writer & Art Historian",
    image: nurShkembi,
    bio: "Dr Nur Shkembi is an award-winning curator, writer and art historian with a research specialisation in Islamic art history, contemporary art and postcolonial theory. Nur has produced and curated over 150 events, exhibitions and community engagement projects and was part of the core team which established the Islamic Museum of Australia, serving as the museum's inaugural Art Director, Exhibitions Manager and foundation Curator. Nur has served on numerous boards and committees, including the Museums, Cultural Heritage and Cultural Development Advisory committee and the Organisation Investment Program. In 2018, she was appointed by the Department of Premier and Cabinet as a Commissioner for the Creative State Commissions. Exhibitions include Soul Fury (Bendigo Art Gallery), DOMINION (Arts West Gallery, University of Melbourne) and Destiny Disrupted (Granville Centre Art Gallery and Griffith University Art Museum). Her recent academic publications include \"Neo-Orientalism and the Persistence of Holbein Carpets: On Writing the Future History of Islamic Art in Australia\" in What is Postnational Art History? (Perimeter Editions) and \"Destiny Disrupted: A History of Contemporary Islamic Art in 'Australia'\" in Variations (Monash University Press). Nur holds a PhD in Art History from the University of Melbourne, where she is a sessional academic in the Master of Art Curatorship program. Nur is a sessional lecturer in the Master of Arts Management program at RMIT University. In 2024, Nur was appointed as the Artistic Director and Curator of MIAA.",
  },
  {
    name: "Anna Thwaites",
    role: "Editor & Publishing Professional",
    image: annaThwaites,
    bio: "Anna Thwaites is the editor of HEAT Magazine and a Senior Editor at Giramondo Publishing, where she commissions and develops work by new and established writers from Australia and overseas, and ushers them through all stages of publishing. She has previously worked as a freelance editor for many of Australia's large and small publishers, as well as offering manuscript assessments and publishing advice to writers at all levels of experience. Before that, she was an editor at Scribe Publications and Pearson. Alongside her work in publishing, she has been a bookseller at two of Melbourne's best independent bookshops, Readings and The Paperback and been a witness to the way that readers and books find each other once the books are out there in the world.",
  },
  {
    name: "Julide Turker",
    role: "Author & Holistic Health Practitioner",
    image: julideTurker,
    bio: "Julide Turker is a Melbourne-based functional medicine practitioner with over 15 years of clinical experience specialising in women's reproductive health and paediatric wellbeing. She holds a Bachelor of Health Science in Naturopathy and Nutrition, postgraduate studies in Food Science at the University of Melbourne, and further post-grad training in Public Health. Julide integrates faith and science, viewing the body as an amanah (trust), and guides holistic healing through nutrition, lifestyle medicine, herbal therapeutics, and spiritually rooted values. She is the author of One Third of Your Stomach and The Sunnah-tarian, books that blend prophetic wisdom, modern nutrition, and social ethics to inspire a return to conscious, compassionate living. Julide is also set to release a children's book series that teaches the Islamic and ethical importance of eating well, showing young readers how nourishment connects the mind, body, and soul. Beyond her writing and clinical work, she serves as the Director and President of Humanitarian Collective, a Melbourne-based charity supporting refugee families, women fleeing domestic violence, and families in need through community aid, education, and wellness programs. Her work bridges tradition and modernity, faith and science, service and storytelling.",
  },
  {
    name: "Jihad Yassine",
    role: "Award-winning Poet",
    image: jihadYassine,
    bio: "Jihad Yassine is a poet and winner of the 2025 Bankstown Poetry Grand Slam. He was a finalist for Australian Poetry Slam 2024, and a finalist of the 2024 National Youth Poetry Slam. He has featured at numerous poetry slams across Australia. He writes about the clash of identity in being an Arab man living in an English world, so as to give people who struggle with language and heritage something to relate to. He loves to hike and explore nature and does so to keep himself in wonder of Allah. Home Between the Cedar Trees is his debut collection.",
  },
]

function PanellistCard({ panellist, onOpen }) {
  return (
    <motion.div {...staggerItem} className="group">
      <div className="relative aspect-square overflow-hidden bg-black">
        <img
          src={panellist.image}
          alt={panellist.name}
          loading="lazy"
          className="block w-full h-full object-cover grayscale brightness-[0.6] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500 ease-out"
        />
        {/* Compact plus button (default) — expands on hover/focus into a pill with label */}
        <button
          type="button"
          onClick={onOpen}
          aria-label={`Read more about ${panellist.name}`}
          className="group/btn absolute top-3 right-3 md:top-4 md:right-4 2xl:top-5 2xl:right-5 3xl:top-6 3xl:right-6 inline-flex items-center gap-2 3xl:gap-3 h-9 md:h-10 2xl:h-12 3xl:h-14 px-3 md:px-3.5 2xl:px-4 3xl:px-5 rounded-full font-aeonik font-medium text-xs md:text-sm 2xl:text-base 3xl:text-lg shadow-sm transition-transform hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#124039] focus-visible:ring-offset-2"
          style={{ backgroundColor: "#FFFFFF", color: INK }}
        >
          <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 group-hover/btn:max-w-[180px] group-hover/btn:opacity-100 group-hover/btn:mr-0.5 group-focus-visible/btn:max-w-[180px] group-focus-visible/btn:opacity-100 group-focus-visible/btn:mr-0.5 transition-all duration-300 ease-out">
            Click to Read More
          </span>
          <Plus
            className="w-4 h-4 md:w-5 md:h-5 2xl:w-6 2xl:h-6 3xl:w-7 3xl:h-7 shrink-0"
            strokeWidth={2.5}
          />
        </button>
      </div>
      <div className="mt-4 md:mt-5 2xl:mt-6 3xl:mt-7">
        <p
          className="font-aeonik text-lg md:text-xl 2xl:text-2xl 3xl:text-3xl font-semibold tracking-tight"
          style={{ color: INK }}
        >
          {panellist.name}
        </p>
        <p
          className="font-barlow text-sm md:text-base 2xl:text-lg 3xl:text-xl mt-1 2xl:mt-1.5 3xl:mt-2"
          style={{ color: "rgba(18,64,57,0.65)" }}
        >
          {panellist.role}
        </p>
      </div>
    </motion.div>
  )
}

function PanellistModal({ panellist, onClose }) {
  useEffect(() => {
    if (!panellist) return
    const onKey = (e) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [panellist, onClose])

  return (
    <AnimatePresence>
      {panellist && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 3xl:p-12"
          style={{ backgroundColor: "rgba(0,0,0,0.55)" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 12 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="panellist-modal-title"
            className="relative w-full max-w-[1100px] 3xl:max-w-[1400px] max-h-[90vh] overflow-y-auto"
            style={{ backgroundColor: SECTION_BG }}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 md:top-6 md:right-6 3xl:top-8 3xl:right-8 z-10 w-11 h-11 md:w-12 md:h-12 3xl:w-16 3xl:h-16 rounded-full flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
              style={{ backgroundColor: LIME, color: INK }}
            >
              <X className="w-5 h-5 md:w-6 md:h-6 3xl:w-8 3xl:h-8" strokeWidth={2.5} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 md:gap-12 3xl:gap-16 p-6 md:p-10 lg:p-14 3xl:p-20">
              {/* Image */}
              <div className="w-full max-w-[280px] md:max-w-[340px] lg:max-w-[400px] 3xl:max-w-[520px] mx-auto md:mx-0">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={panellist.image}
                    alt={panellist.name}
                    className="block w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Text */}
              <div className="md:pt-12 lg:pt-16 3xl:pt-24 md:pr-16 3xl:pr-24">
                <h3
                  id="panellist-modal-title"
                  className="font-aeonik text-2xl md:text-3xl lg:text-4xl 3xl:text-5xl font-semibold tracking-tight mb-4 md:mb-5 3xl:mb-7"
                  style={{ color: INK }}
                >
                  {panellist.name}
                </h3>
                <p
                  className="font-barlow text-sm md:text-base lg:text-lg 3xl:text-xl leading-relaxed"
                  style={{ color: INK }}
                >
                  {panellist.bio}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function SMWFPanellistsSection() {
  const [selected, setSelected] = useState(null)

  return (
    <section
      id="smwf-panellists"
      className="pt-2 md:pt-3 lg:pt-4 2xl:pt-5 3xl:pt-6 pb-20 md:pb-24 lg:pb-28 2xl:pb-32 3xl:pb-40"
      style={{ backgroundColor: SECTION_BG }}
    >
      <div className="w-full px-6 md:px-10 lg:px-16 2xl:px-20 3xl:px-24">
        <motion.h2
          {...fadeInUp}
          className="font-aeonik text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl 3xl:text-7xl font-medium tracking-tight leading-tight mb-8 md:mb-10 2xl:mb-12 3xl:mb-16"
          style={{ color: INK }}
        >
          Meet our Panellists and Presenters
        </motion.h2>

        <motion.div
          {...staggerContainer}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 gap-6 md:gap-7 2xl:gap-8 3xl:gap-10"
        >
          {PANELLISTS.map((p) => (
            <PanellistCard key={p.name} panellist={p} onOpen={() => setSelected(p)} />
          ))}
        </motion.div>
      </div>

      <PanellistModal panellist={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
