interface Engine {
  key: string;
  name: string;
  search_url: string;
  suggest_url?: string;
}

export const engines: Engine[] = [
  {
    key: 'duckduckgo',
    name: 'DuckDuckGo',
    search_url: 'https://duckduckgo.com/?q={searchTerms}',
  },
  {
    key: 'qwant',
    name: 'Qwant',
    search_url: 'https://www.qwant.com/?q={searchTerms}',
  },
  {
    key: 'ecosia',
    name: 'Ecosia',
    search_url: 'https://www.ecosia.org/search?q={searchTerms}',
  },
  {
    key: 'lilo',
    name: 'Lilo',
    search_url: 'https://search.lilo.org/results.php?q={searchTerms}',
  },
  {
    key: 'startpage',
    name: 'Startpage',
    search_url: 'https://www.startpage.com/do/search?q={searchTerms}',
  },
  {
    key: 'searx uferwerk',
    name: 'Searx Uferwerk',
    search_url: 'https://suche.uferwerk.org/?q={searchTerms}',
  },
  {
    key: 'searx xyz',
    name: 'Searx XYZ',
    search_url: 'https://searx.xyz/?q={searchTerms}',
  },
  {
    key: 'searx mdosch',
    name: 'Searx Mdosch',
    search_url: 'https://search.mdosch.de/?q={searchTerms}',
  },
  {
    key: 'searx belgium',
    name: 'Searx Belgium',
    search_url: 'https://searx.be/?q={searchTerms}',
  },
  {
    key: 'searx rapu',
    name: 'Searx Rapu',
    search_url: 'https://rapu.nz/?q={searchTerms}',
  },
  {
    key: 'searx hsbp',
    name: 'Searx HSBP',
    search_url: 'https://seeks.hsbp.org/?q={searchTerms}',
  },
  {
    key: 'searx inode',
    name: 'Searx Inode',
    search_url: 'https://searx.lnode.net/?q={searchTerms}',
  },
  {
    key: 'searx nightmare',
    name: 'Searx Nightmare',
    search_url: 'https://searx.nightmare.life/?q={searchTerms}',
  },
  {
    key: 'searx prvcy',
    name: 'Searx PRVCY',
    search_url: 'https://searx.prvcy.eu/?q={searchTerms}',
  },
  {
    key: 'searx ir',
    name: 'Searx IR',
    search_url: 'https://searx.ir/?q={searchTerms}',
  },
  {
    key: 'searx semipvt',
    name: 'Searx SemiPvt',
    search_url: 'https://searx.semipvt.com/?q={searchTerms}',
  },
  {
    key: 'searx rasp',
    name: 'Searx Rasp',
    search_url: 'https://searx.rasp.fr/?q={searchTerms}',
  },
  {
    key: 'searx ninja',
    name: 'Searx Ninja',
    search_url: 'https://searx.ninja/?q={searchTerms}',
  },
  {
    key: 'searx biboumail',
    name: 'Searx Biboumail',
    search_url: 'https://search.biboumail.fr/?q={searchTerms}',
  },
  {
    key: 'searx info',
    name: 'Searx Info',
    search_url: 'https://searx.info/?q={searchTerms}',
  },
  {
    key: 'searx sunless',
    name: 'Searx Sunless',
    search_url: 'https://searx.sunless.cloud/?q={searchTerms}',
  },
  {
    key: 'searx tuxcloud',
    name: 'Searx Tuxcloud',
    search_url: 'https://searx.tuxcloud.net/?q={searchTerms}',
  },
  {
    key: 'searx forked',
    name: 'Searx Forked',
    search_url: 'https://searx.forked.io/?q={searchTerms}',
  },
  {
    key: 'searx pofilo',
    name: 'Searx Pofilo',
    search_url: 'https://searx.pofilo.fr/?q={searchTerms}',
  },
  {
    key: 'searx privatenet',
    name: 'Searx Privatenet',
    search_url: 'https://searx.privatenet.cf/?q={searchTerms}',
  },
  {
    key: 'yacy searchlab',
    name: 'YaCy Searchlab',
    search_url: 'https://yacy.searchlab.eu/yacysearch.html?query={searchTerms}',
  },
  {
    key: 'mojek',
    name: 'Mojeek',
    search_url: 'https://www.mojeek.com/search?q={searchTerms}',
  },
  {
  key: 'swisscows',
  name: 'Swisscows',
  search_url: 'https://swisscows.com/web?query={searchTerms}',
  },
  {
  key: 'metager',
  name: 'MetaGer',
  search_url: 'https://metager.org/meta/meta.ger3?eingabe={searchTerms}',
  },
  {
  key: 'givero',
  name: 'Givero',
  search_url: 'https://www.givero.com/search?q={searchTerms}',
  },
  {
  key: 'myprivatesearch',
  name: 'MyPrivateSearch',
  search_url: 'https://www.myprivatesearch.com/search?q={searchTerms}',
  },
  {
  key: 'yippy',
  name: 'Yippy',
  search_url: 'https://yippy.com/search?query={searchTerms}',
  },
  {
  key: 'lukol',
  name: 'Lukol',
  search_url: 'https://www.lukol.com/s.php?q={searchTerms}',
  },
  {
  key: 'oscobo',
  name: 'Oscobo',
  search_url: 'https://www.oscobo.com/search.php?q={searchTerms}',
  },
  {
  key: 'gigablast',
  name: 'Gigablast',
  search_url: 'https://www.gigablast.com/search?c=main&q={searchTerms}',
  },
  {
  key: 'peekier',
  name: 'Peekier',
  search_url: 'https://peekier.com/#!{searchTerms}',
  },
  {
    key: 'metager',
    name: 'MetaGer',
    search_url: 'https://metager.de/meta/meta.ger3?eingabe={searchTerms}',
  },
];
