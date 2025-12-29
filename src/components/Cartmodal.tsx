import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { CartItem } from '../types';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
}

export default function CartModal({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
}: CartModalProps) {
  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.1;
  const deliveryFee = cart.length > 0 ? 2.99 : 0;
  const total = subtotal + tax + deliveryFee;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-md transition-opacity"
        onClick={onClose}
      ></div>

      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-gradient-to-b from-white to-yellow-50/40 shadow-2xl transform transition-transform border-l border-slate-200">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-yellow-100/50 bg-gradient-to-r from-white to-yellow-50/30">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-yellow-500 via-amber-600 to-orange-600 rounded-xl shadow-lg">
                <ShoppingBag className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">Your Cart</h2>
                <p className="text-sm text-slate-600 font-medium">{cart.length} items</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-yellow-100 rounded-lg transition-colors"
              aria-label="Close cart"
            >
              <X className="w-6 h-6 text-slate-600" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="p-6 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full mb-4">
                  <ShoppingBag className="w-16 h-16 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Your cart is empty</h3>
                <p className="text-slate-600 mb-6">Add some delicious items to get started!</p>
                <button
                  onClick={onClose}
                  className="px-6 py-3 bg-gradient-to-r from-yellow-500 via-amber-600 to-orange-600 text-white font-semibold rounded-xl hover:from-yellow-600 hover:via-amber-700 hover:to-orange-700 transition-all duration-300 shadow-lg"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-4 bg-gradient-to-br from-yellow-50/50 to-orange-50/30 rounded-xl hover:from-yellow-100/50 hover:to-orange-100/30 transition-all duration-200 border border-yellow-100/30"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg shadow-md"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-800">{item.name}</h3>
                      <p className="text-sm text-slate-600 mt-1">
                        ${item.price.toFixed(2)} each
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="p-1.5 bg-white rounded-lg hover:bg-yellow-100 transition-colors shadow-sm"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-4 h-4 text-slate-600" />
                        </button>
                        <span className="w-8 text-center font-bold text-slate-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="p-1.5 bg-white rounded-lg hover:bg-yellow-100 transition-colors shadow-sm"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-4 h-4 text-slate-600" />
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="p-1.5 hover:bg-red-100 rounded-lg transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </button>
                      <span className="font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {cart.length > 0 && (
            <div className="border-t border-yellow-100/50 p-6 bg-gradient-to-b from-yellow-50/50 to-orange-50/30">
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-slate-700 font-medium">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-700 font-medium">
                  <span>Tax (10%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-700 font-medium">
                  <span>Delivery Fee</span>
                  <span>${deliveryFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xl font-bold pt-4 border-t border-yellow-100/50">
                  <span className="text-slate-800">Total</span>
                  <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>
              <button className="w-full py-4 bg-gradient-to-r from-yellow-500 via-amber-600 to-orange-600 hover:from-yellow-600 hover:via-amber-700 hover:to-orange-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
