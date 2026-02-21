import React, { useState } from 'react';
import { Globe, MapPin, Search } from 'lucide-react';

export const Branches = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const branches = [
    { name: "Erick Omondi", branch: "Kakamega", contact: "0726795323" },
    { name: "Philip Marshell", branch: "Ejinja Junction", contact: "0713287907" },
    { name: "Mercy Wekesa", branch: "Kipkaren River", contact: "0716240687" },
    { name: "Victor Mola", branch: "Mumias", contact: "0702922027" },
    { name: "Peter Zadock", branch: "Aterait", contact: "0719804840" },
    { name: "Elias Shitsimi", branch: "Munongo", contact: "0710282780" },
    { name: "Nelson Wandera", branch: "Khuduru", contact: "0728384992" },
    { name: "Fred Sanya", branch: "Uganda", contact: "0713384017" },
    { name: "Charles Keya", branch: "Aget", contact: "0715264020" },
    { name: "Hudson Barasa", branch: "Nairobi, Kinoo", contact: "0720246732" },
    { name: "Geofrey Sitati", branch: "Mihuu", contact: "0704215440" },
    { name: "David opiyo", branch: "Mombasa", contact: "0721658403" },
    { name: "Elizaphan Bogonko", branch: "Matayos", contact: "0724445676" },
    { name: "Christom Odongo", branch: "Mabale", contact: "0722296577" },
    { name: "Thomas Juma", branch: "Mayenje", contact: "0712539238" },
    { name: "Christopher Otieno", branch: "Burumba", contact: "0721825098" },
    { name: "Aggrey Musabi", branch: "Nudokomi", contact: "0721262214" },
    { name: "Emmanuel Ogaye", branch: "Angorom", contact: "0727998161" },
    { name: "Jude Opailo", branch: "Adungosi", contact: "0725464839" },
    { name: "Benson Odaling’a", branch: "Amukura", contact: "0714472619" },
    { name: "Jimmy Patisi", branch: "Mundika", contact: "0720593362" },
    { name: "Victor Wanjala", branch: "Nambale", contact: "0725989945" },
    { name: "Dismas Mahulo", branch: "Kemodo", contact: "0700627767" },
    { name: "Boniface Maloba", branch: "Sega", contact: "0722886324" },
    { name: "Agneta Shiare", branch: "Busibwabo", contact: "0728515546" },
    { name: "Winston Wafula", branch: "Bumala", contact: "0722263774" },
    { name: "David Mwenza Wekesa", branch: "Ndere", contact: "0710918680" },
    { name: "Zachayo Khaoya", branch: "Ganjala", contact: "0710554019" },
    { name: "Joshua Ogecha", branch: "Odiado", contact: "0711976073" },
    { name: "Evans Nadecho", branch: "Ugunja", contact: "0743282764" },
    { name: "Festus Ngesa", branch: "Buyende", contact: "0758376488" },
    { name: "Zack Peter", branch: "Kanana", contact: "0702870993" },
    { name: "Walter Bwire", branch: "Nasira", contact: "0710984979" },
    { name: "Kevin Wandera", branch: "Jagania", contact: "0725930495" },
    { name: "Mediatrix Nabulindo", branch: "Bukadanyi", contact: "0794604447" },
    { name: "Everlyne Wafula", branch: "Naitiri", contact: "0706328282" },
    { name: "Francis Nachibwede", branch: "Babadogo", contact: "0728688950" }
  ];

  const filteredBranches = branches.filter(b => 
    b.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    b.branch.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-church-purple font-bold uppercase tracking-widest mb-4">Our Network</h2>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-slate-900 mb-6">Church Branches</h1>
          <p className="max-w-3xl mx-auto text-lg text-slate-600 mb-10">
            Zion Temple is a growing family. Connect with a branch near you and experience the divine presence.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Search by branch name or pastor..."
              className="block w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-church-purple focus:border-transparent transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {filteredBranches.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredBranches.map((branch, i) => (
              <div key={i} className="p-6 bg-white rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="w-10 h-10 bg-church-purple/10 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="text-church-purple w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">{branch.branch}</h4>
                <p className="text-sm text-church-purple font-medium mb-3">{branch.name}</p>
                <div className="pt-3 border-t border-slate-50">
                  <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">Contact</p>
                  <p className="text-sm text-slate-600 font-mono">{branch.contact}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="h-10 w-10 text-slate-300" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">No branches found</h3>
            <p className="text-slate-500">Try searching for a different name or location.</p>
          </div>
        )}
      </div>
    </div>
  );
};
