import React from 'react';
import { Globe, MapPin } from 'lucide-react';

const Markets = () => {
  const markets = [
    {
      region: "Europe",
      countries: ["Germany", "France", "United Kingdom", "Netherlands", "Italy", "Spain"],
      flag: "🇪🇺",
      description: "Our primary export destination with established trade relationships"
    },
    {
      region: "Middle East",
      countries: ["Saudi Arabia", "UAE", "Kuwait", "Qatar", "Jordan", "Lebanon"],
      flag: "🕌",
      description: "Growing market with high demand for premium Egyptian produce"
    },
    {
      region: "Asia",
      countries: ["China", "India", "Malaysia", "Singapore", "Thailand", "Japan"],
      flag: "🌏",
      description: "Emerging markets with significant growth potential"
    },
    {
      region: "North America",
      countries: ["United States", "Canada"],
      flag: "🇺🇸",
      description: "Premium market segment focusing on high-quality organic produce"
    }
  ];

  return (
    <section id="markets" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Global Export Markets</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Agrinile serves diverse international markets, delivering Egyptian agricultural excellence worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {markets.map((market, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">{market.flag}</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{market.region}</h3>
                  <p className="text-gray-600">{market.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                {market.countries.map((country, countryIndex) => (
                  <div key={countryIndex} className="flex items-center text-gray-700">
                    <span className="mr-2 text-sm">
                      {market.region === 'Europe' && countryIndex === 0 && '🇩🇪'}
                      {market.region === 'Europe' && countryIndex === 1 && '🇫🇷'}
                      {market.region === 'Europe' && countryIndex === 2 && '🇬🇧'}
                      {market.region === 'Europe' && countryIndex === 3 && '🇳🇱'}
                      {market.region === 'Europe' && countryIndex === 4 && '🇮🇹'}
                      {market.region === 'Europe' && countryIndex === 5 && '🇪🇸'}
                      {market.region === 'Middle East' && countryIndex === 0 && '🇸🇦'}
                      {market.region === 'Middle East' && countryIndex === 1 && '🇦🇪'}
                      {market.region === 'Middle East' && countryIndex === 2 && '🇰🇼'}
                      {market.region === 'Middle East' && countryIndex === 3 && '🇶🇦'}
                      {market.region === 'Middle East' && countryIndex === 4 && '🇯🇴'}
                      {market.region === 'Middle East' && countryIndex === 5 && '🇱🇧'}
                      {market.region === 'Asia' && countryIndex === 0 && '🇨🇳'}
                      {market.region === 'Asia' && countryIndex === 1 && '🇮🇳'}
                      {market.region === 'Asia' && countryIndex === 2 && '🇲🇾'}
                      {market.region === 'Asia' && countryIndex === 3 && '🇸🇬'}
                      {market.region === 'Asia' && countryIndex === 4 && '🇹🇭'}
                      {market.region === 'Asia' && countryIndex === 5 && '🇯🇵'}
                      {market.region === 'North America' && countryIndex === 0 && '🇺🇸'}
                      {market.region === 'North America' && countryIndex === 1 && '🇨🇦'}
                    </span>
                    <span className="text-sm">{country}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="text-center">
            <Globe className="w-16 h-16 text-green-600 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Expanding Horizons</h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
              With established trade relationships and growing demand for Egyptian agricultural products, 
              we continue to explore new markets and opportunities. Our logistics network ensures 
              reliable delivery to all major international destinations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">25+</div>
                <div className="text-gray-600">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                <div className="text-gray-600">Successful Shipments</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">99%</div>
                <div className="text-gray-600">On-Time Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Markets;