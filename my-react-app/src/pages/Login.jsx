import image from '../assets/hero.jpg';

function Login() {
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('تم الضغط على زر تسجيل الدخول');
    };
  
    return (
      <div 
        className="min-h-screen w-full bg-cover bg-center font-cairo text-[#5A3E2B]" 
        style={{ backgroundImage: `url(${image})`}}
      >
        <div className="flex justify-center items-center min-h-screen w-full p-4">
          <div className="w-full max-w-md relative overflow-hidden rounded-2xl shadow-lg">
            {/* الصورة الخلفية للفورم */}
            <div 
              className="absolute inset-0 bg-cover bg-center z-0" 
              style={{ backgroundImage: "url('/images/form-background.jpg')" }}
            ></div>
            
            {/* طبقة شفافة فوق الصورة */}
            <div className="absolute inset-0 bg-[#FFF7F2] bg-opacity-50 z-10"></div>
            
            {/* محتوى النموذج */}
            <div className="relative z-20 p-8 text-center">
              <h2 className="text-2xl font-bold text-[#8B4513] mb-6">تسجيل الدخول</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4 text-right">
                  <label htmlFor="email" className="block mb-1">البريد الإلكتروني</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B4513]" 
                    required 
                  />
                </div>
                
                <div className="mb-6 text-right">
                  <label htmlFor="password" className="block mb-1">كلمة المرور</label>
                  <input 
                    type="password" 
                    id="password" 
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B4513]" 
                    required 
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="w-full py-2 px-4 bg-[#8B4513] text-white rounded-md hover:bg-[#6A2E0F] transition duration-300"
                >
                  تسجيل الدخول
                </button>
              </form>
              
              <p className="mt-4">
                ليس لديك حساب؟{' '}
                <a href="/register" className="text-[#8B4513] hover:underline">
                  سجل الآن
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Login;