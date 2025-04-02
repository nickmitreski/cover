import { Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Layouts
import MainLayout from '@/layouts/MainLayout'

// Pages
import HomePage from '@/pages/Home'
import PricingPage from '@/pages/Pricing'
import FeaturesPage from '@/pages/Features'
import ContentPage from '@/pages/Content'
import TemplatesPage from '@/pages/Templates'
import LoginPage from '@/pages/Login'
import SignupPage from '@/pages/Signup'
import DemoPage from '@/pages/Demo'
import PrivacyPage from '@/pages/Privacy'
import TermsPage from '@/pages/Terms'
import NotFoundPage from '@/pages/NotFound'
import SchedulingPage from '@/pages/Scheduling'
import CopywritingPage from '@/pages/Copywriting'
import AIAssistPage from '@/pages/AIAssist'
import AutomationPage from '@/pages/Automation'
import EcommercePage from '@/pages/Ecommerce'
import BlogPostPage from '@/components/BlogPostPage'
import ScrollToTop from '@/components/ScrollToTop'
import ContactPage from '@/pages/Contact'
import CookiesPage from '@/pages/Cookies'
import RefundPage from '@/pages/Refund'

// Feature Pages
import AICopywritingPage from '@/pages/features/AICopywriting'
import ContentGeneratorPage from '@/pages/features/ContentGenerator'
import ContentPlanPage from '@/pages/features/ContentPlan'
import NicheResearchPage from '@/pages/features/NicheResearch'
import HashtagResearchPage from '@/pages/features/HashtagResearch'
import InstagramCoachingPage from '@/pages/features/InstagramCoaching'
import CollaborationServicesPage from '@/pages/features/CollaborationServices'
import ProfileOptimizationPage from '@/pages/features/ProfileOptimization'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/features/AICopywriting" element={<AICopywritingPage />} />
          <Route path="/features/ContentGenerator" element={<ContentGeneratorPage />} />
          <Route path="/features/ContentPlan" element={<ContentPlanPage />} />
          <Route path="/features/NicheResearch" element={<NicheResearchPage />} />
          <Route path="/features/HashtagResearch" element={<HashtagResearchPage />} />
          <Route path="/features/InstagramCoaching" element={<InstagramCoachingPage />} />
          <Route path="/features/CollaborationServices" element={<CollaborationServicesPage />} />
          <Route path="/features/ProfileOptimization" element={<ProfileOptimizationPage />} />
          <Route path="/features/content" element={<ContentPage />} />
          <Route path="/features/scheduling" element={<SchedulingPage />} />
          <Route path="/features/copywriting" element={<CopywritingPage />} />
          <Route path="/features/ai-assist" element={<AIAssistPage />} />
          <Route path="/features/automation" element={<AutomationPage />} />
          <Route path="/features/ecommerce" element={<EcommercePage />} />
          <Route path="/blog" element={<BlogPostPage />} />
          <Route path="/blog/:id" element={<BlogPostPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/templates" element={<TemplatesPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/cookies" element={<CookiesPage />} />
          <Route path="/refund" element={<RefundPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  )
}

export default App
