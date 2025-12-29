import { MapPin, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { apiService, Address } from '../services/api';

interface AddressSelectorProps {
  onAddressChange?: (address: Address) => void;
}

export default function AddressSelector({ onAddressChange }: AddressSelectorProps) {
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const loadAddresses = async () => {
      const defaultAddr = await apiService.getDefaultAddress();
      setSelectedAddress(defaultAddr);

      const allAddresses = await apiService.getAddresses();
      setAddresses(allAddresses);
    };
    loadAddresses();
  }, []);

  const handleSelectAddress = async (address: Address) => {
    await apiService.setDefaultAddress(address.id);
    setSelectedAddress(address);
    setIsOpen(false);
    onAddressChange?.(address);
  };

  if (!selectedAddress) {
    return (
      <div className="h-10 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg animate-pulse"></div>
    );
  }

  return (
    <div className="relative w-full sm:w-auto">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-gradient-to-r from-yellow-50 to-orange-50 hover:from-yellow-100 hover:to-orange-100 transition-all duration-300 border border-yellow-200/50 w-full sm:w-auto"
      >
        <MapPin className="w-5 h-5 text-yellow-600 flex-shrink-0" />
        <div className="text-left min-w-0">
          <p className="text-xs text-yellow-600 font-bold uppercase tracking-widest">Deliver to</p>
          <p className="text-sm font-bold text-slate-800 truncate">
            {selectedAddress.street}
          </p>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-yellow-600 transition-transform duration-300 flex-shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 z-50 bg-white rounded-xl shadow-2xl border border-yellow-200 overflow-hidden">
          {addresses.map((address) => (
            <button
              key={address.id}
              onClick={() => handleSelectAddress(address)}
              className={`w-full text-left px-4 py-4 transition-all duration-200 border-b border-yellow-100 last:border-b-0 hover:bg-yellow-50 ${
                selectedAddress.id === address.id ? 'bg-yellow-100/40' : ''
              }`}
            >
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-slate-800">{address.street}</p>
                  <p className="text-sm text-slate-600">
                    {address.city}, {address.zip}
                  </p>
                </div>
                {selectedAddress.id === address.id && (
                  <div className="ml-auto flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-yellow-500 to-orange-600 flex items-center justify-center">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
