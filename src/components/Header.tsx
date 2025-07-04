import React, { useState, useEffect } from 'react';
import { Menu, X, Bell } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);
  const [isNewNotification, setIsNewNotification] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Update notification count and trigger animation when messages change
    const count = messages.length;
    setNotificationCount(count);
    if (count > 0 && !isNewNotification) {
      setIsNewNotification(true);
      // Reset animation after 2 seconds
      const timer = setTimeout(() => setIsNewNotification(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [messages, isNewNotification]);

  const navItems = [
    { name: 'Accueil', href: '#hero' },
    { name: 'À propos', href: '#about' },
    { name: 'Expérience', href: '#experience' },
    { name: 'Éducation', href: '#education' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Projets', href: '#projects' },
    { name: 'Design', href: '#design' },
    { name: 'Vie Associative', href: '#associations' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        setIsLoggedIn(true);
        setIsPopupOpen(false);
        fetchMessages();
      } else {
        alert('Login failed. Check your email and password.');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred during login.');
    }
  };

  const fetchMessages = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/messages');
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Portfolio
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                {item.name}
              </button>
            ))}
            <div className="relative">
              <button
                onClick={() => setIsPopupOpen(true)}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                <Bell size={24} />
              </button>
              {notificationCount > 0 && (
                <span
                  className={`absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 bg-red-500 text-white text-xs rounded-full ${
                    isNewNotification ? 'animate-bounce' : ''
                  }`}
                >
                  {notificationCount}
                </span>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
            <div className="flex flex-col py-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="px-6 py-3 text-left text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
              <div className="relative">
                <button
                  onClick={() => setIsPopupOpen(true)}
                  className="px-6 py-3 text-left text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
                >
                  Notifications
                </button>
                {notificationCount > 0 && (
                  <span
                    className={`absolute -top-1 -right-2 flex items-center justify-center w-5 h-5 bg-red-500 text-white text-xs rounded-full ${
                      isNewNotification ? 'animate-bounce' : ''
                    }`}
                  >
                    {notificationCount}
                  </span>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Popup for Login and Messages */}
        {isPopupOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              {!isLoggedIn ? (
                <form onSubmit={handleLogin} className="space-y-4">
                  <h2 className="text-xl font-bold mb-4">Connexion</h2>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full px-3 py-2 border rounded"
                    required
                  />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Mot de passe"
                    className="w-full px-3 py-2 border rounded"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                  >
                    Se connecter
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsPopupOpen(false)}
                    className="w-full mt-2 bg-gray-300 text-gray-700 py-2 rounded hover:bg-gray-400"
                  >
                    Fermer
                  </button>
                </form>
              ) : (
                <div className="space-y-4">
                  <h2 className="text-xl font-bold mb-4">Messages</h2>
                  {messages.length > 0 ? (
                    <ul className="max-h-64 overflow-y-auto">
                      {messages.map((msg) => (
                        <li key={msg.id} className="py-2 border-b">
                          <strong>{msg.name}</strong> ({msg.email}): {msg.subject} - {msg.message}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>Aucun message pour le moment.</p>
                  )}
                  <button
                    onClick={() => setIsPopupOpen(false)}
                    className="w-full mt-2 bg-gray-300 text-gray-700 py-2 rounded hover:bg-gray-400"
                  >
                    Fermer
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;