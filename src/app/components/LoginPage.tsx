import { useState } from "react";
import { useNavigate } from "react-router";
import { Mail, Lock, Eye, EyeOff, Chrome, Github, User } from "lucide-react";
import logoImage from "../../imports/KakaoTalk_20260501_180120253.png";

export function LoginPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const switchMode = (next: "login" | "signup") => {
    setMode(next);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setName("");
    setPasswordError("");
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordError("비밀번호가 일치하지 않습니다.");
      return;
    }
    setPasswordError("");
    setIsLoading(true);
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`${provider} 로그인`);
    navigate("/");
  };

  const isSignup = mode === "signup";

  return (
    <div className="min-h-screen bg-[#2C3E50] flex">
      {/* 왼쪽 영역 - 브랜딩 */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#2C3E50] to-[#1a252f] items-center justify-center p-12 relative overflow-hidden">
        {/* 배경 장식 */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-[#A8E6B8] to-[#5CC87A] rounded-full blur-3xl opacity-20" />
          <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-r from-[#5CC87A] to-[#2E8B4F] rounded-full blur-3xl opacity-30" />
        </div>

        <div className="relative z-10 text-center">
          {/* 로고 */}
          <div className="mb-12 flex justify-center">
            <div className="w-64 h-64 rounded-full overflow-hidden">
              <img src={logoImage} alt="Logo" className="w-full h-full object-cover drop-shadow-2xl" />
            </div>
          </div>

          <h1 className="text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#A8E6B8] via-[#5CC87A] to-[#FFE66D] bg-clip-text text-transparent">
              HASI
            </span>
          </h1>
          <p className="text-xl text-gray-300">
            팀을 연결하는 협업 플랫폼
          </p>
        </div>
      </div>

      {/* 오른쪽 영역 - 폼 */}
      <div className="flex-1 flex items-center justify-center p-6 bg-white overflow-y-auto">
        <div className="w-full max-w-md py-8">
          {/* 모바일 로고 */}
          <div className="lg:hidden mb-8 flex flex-col items-center">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
              <img src={logoImage} alt="Logo" className="w-full h-full object-cover drop-shadow-xl" />
            </div>
            <h1 className="text-3xl font-bold">
              <span className="bg-gradient-to-r from-[#5CC87A] to-[#2E8B4F] bg-clip-text text-transparent">HASI</span>
            </h1>
          </div>

          {/* 탭 전환 */}
          <div className="flex mb-8 bg-gray-100 rounded-xl p-1">
            <button
              onClick={() => switchMode("login")}
              className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${
                !isSignup
                  ? "bg-white text-[#2C3E50] shadow-sm"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              로그인
            </button>
            <button
              onClick={() => switchMode("signup")}
              className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${
                isSignup
                  ? "bg-white text-[#2C3E50] shadow-sm"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              회원가입
            </button>
          </div>

          {/* 헤더 */}
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-1">
              {isSignup ? "회원가입" : "로그인"}
            </h2>
            <p className="text-sm text-gray-500">
              {isSignup ? "HASI에 오신 것을 환영합니다" : "다시 만나서 반가워요"}
            </p>
          </div>

          {/* 소셜 로그인 */}
          <div className="space-y-3 mb-6">
            <button
              onClick={() => handleSocialLogin("Google")}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 border-2 border-gray-200 hover:border-gray-300 rounded-xl transition-all hover:shadow-md bg-white"
            >
              <Chrome size={20} className="text-[#4285F4]" />
              <span className="font-medium text-gray-700">Google로 계속하기</span>
            </button>

            <button
              onClick={() => handleSocialLogin("GitHub")}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 border-2 border-gray-200 hover:border-gray-300 rounded-xl transition-all hover:shadow-md bg-white"
            >
              <Github size={20} className="text-gray-900" />
              <span className="font-medium text-gray-700">GitHub로 계속하기</span>
            </button>
          </div>

          {/* 구분선 */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">
                {isSignup ? "또는 이메일로 가입" : "또는 이메일로 로그인"}
              </span>
            </div>
          </div>

          {/* 로그인 폼 */}
          {!isSignup && (
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">이메일</label>
                <div className="relative">
                  <Mail size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#5CC87A] focus:ring-4 focus:ring-[#A8E6B8]/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">비밀번호</label>
                <div className="relative">
                  <Lock size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="w-full pl-12 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:border-[#5CC87A] focus:ring-4 focus:ring-[#A8E6B8]/20 outline-none transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 text-[#5CC87A] border-gray-300 rounded focus:ring-[#A8E6B8]" />
                  <span className="ml-2 text-sm text-gray-600">로그인 상태 유지</span>
                </label>
                <button type="button" className="text-sm font-medium bg-gradient-to-r from-[#5CC87A] to-[#2E8B4F] bg-clip-text text-transparent hover:opacity-80">
                  비밀번호 찾기
                </button>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-[#A8E6B8] via-[#5CC87A] to-[#2E8B4F] hover:from-[#5CC87A] hover:via-[#2E8B4F] hover:to-[#1a5c33] text-white font-semibold py-3 rounded-xl transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "로그인 중..." : "로그인"}
              </button>
            </form>
          )}

          {/* 회원가입 폼 */}
          {isSignup && (
            <form onSubmit={handleSignup} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">이름</label>
                <div className="relative">
                  <User size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="홍길동"
                    required
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#5CC87A] focus:ring-4 focus:ring-[#A8E6B8]/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">이메일</label>
                <div className="relative">
                  <Mail size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#5CC87A] focus:ring-4 focus:ring-[#A8E6B8]/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">비밀번호</label>
                <div className="relative">
                  <Lock size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="8자 이상 입력하세요"
                    required
                    minLength={8}
                    className="w-full pl-12 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:border-[#5CC87A] focus:ring-4 focus:ring-[#A8E6B8]/20 outline-none transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">비밀번호 확인</label>
                <div className="relative">
                  <Lock size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => { setConfirmPassword(e.target.value); setPasswordError(""); }}
                    placeholder="비밀번호를 다시 입력하세요"
                    required
                    className={`w-full pl-12 pr-12 py-3 border-2 rounded-xl focus:ring-4 outline-none transition-all ${
                      passwordError
                        ? "border-red-400 focus:border-red-400 focus:ring-red-100"
                        : "border-gray-200 focus:border-[#5CC87A] focus:ring-[#A8E6B8]/20"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {passwordError && (
                  <p className="mt-1 text-xs text-red-500">{passwordError}</p>
                )}
              </div>

              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  className="mt-1 w-4 h-4 text-[#5CC87A] border-gray-300 rounded focus:ring-[#A8E6B8]"
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  <span className="font-medium bg-gradient-to-r from-[#5CC87A] to-[#2E8B4F] bg-clip-text text-transparent cursor-pointer">이용약관</span> 및{" "}
                  <span className="font-medium bg-gradient-to-r from-[#5CC87A] to-[#2E8B4F] bg-clip-text text-transparent cursor-pointer">개인정보처리방침</span>에 동의합니다
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-[#A8E6B8] via-[#5CC87A] to-[#2E8B4F] hover:from-[#5CC87A] hover:via-[#2E8B4F] hover:to-[#1a5c33] text-white font-semibold py-3 rounded-xl transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "가입 중..." : "회원가입"}
              </button>
            </form>
          )}

          {/* 모드 전환 안내 */}
          <p className="mt-6 text-center text-sm text-gray-600">
            {isSignup ? "이미 계정이 있으신가요?" : "계정이 없으신가요?"}{" "}
            <button
              onClick={() => switchMode(isSignup ? "login" : "signup")}
              className="font-medium bg-gradient-to-r from-[#5CC87A] to-[#2E8B4F] bg-clip-text text-transparent hover:opacity-80"
            >
              {isSignup ? "로그인" : "회원가입"}
            </button>
          </p>

          {/* 데모 안내 */}
          <div className="mt-6 p-4 bg-gradient-to-r from-[#A8E6B8]/10 to-[#FFE66D]/10 rounded-xl border border-[#A8E6B8]/20">
            <p className="text-sm text-gray-600 text-center">
              <strong className="text-[#2E8B4F]">데모 버전:</strong> 아무 이메일과 비밀번호로 {isSignup ? "가입" : "로그인"} 가능합니다
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
