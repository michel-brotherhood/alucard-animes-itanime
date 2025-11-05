import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingMenu from "@/components/FloatingMenu";
import { Shield, Eye, Lock, UserCheck, FileText } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary/90 to-accent py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-16 h-16 text-white mx-auto mb-4" />
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
              POLÍTICA DE PRIVACIDADE
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-6 bg-background">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Introduction */}
            <div className="bg-card border-2 border-border rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl md:text-3xl font-black text-secondary mb-4">
                Introdução
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                A ANIME NIKITY está comprometida em proteger a privacidade e segurança dos dados pessoais de seus usuários. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais quando você interage conosco através do nosso site, eventos ou outros canais de comunicação.
              </p>
            </div>

            {/* Data Collection */}
            <div className="bg-card border-2 border-border rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-primary" />
                <h2 className="text-2xl md:text-3xl font-black text-secondary">
                  Informações que Coletamos
                </h2>
              </div>
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>Coletamos os seguintes tipos de informações:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Dados de identificação:</strong> Nome completo, e-mail, telefone</li>
                  <li><strong>Dados de comunicação:</strong> Mensagens enviadas através de formulários de contato</li>
                  <li><strong>Dados de navegação:</strong> Informações sobre como você usa nosso site (cookies, endereço IP, tipo de navegador)</li>
                  <li><strong>Dados de evento:</strong> Informações relacionadas à compra de ingressos e participação em eventos</li>
                </ul>
              </div>
            </div>

            {/* Data Usage */}
            <div className="bg-card border-2 border-border rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-primary" />
                <h2 className="text-2xl md:text-3xl font-black text-secondary">
                  Como Usamos suas Informações
                </h2>
              </div>
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>Utilizamos suas informações pessoais para:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Processar e responder suas solicitações de contato</li>
                  <li>Gerenciar compras de ingressos e participação em eventos</li>
                  <li>Enviar comunicações sobre eventos, promoções e atualizações (com seu consentimento)</li>
                  <li>Melhorar nossos serviços e experiência do usuário</li>
                  <li>Cumprir obrigações legais e regulatórias</li>
                  <li>Prevenir fraudes e garantir a segurança</li>
                </ul>
              </div>
            </div>

            {/* Data Protection */}
            <div className="bg-card border-2 border-border rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-6 h-6 text-primary" />
                <h2 className="text-2xl md:text-3xl font-black text-secondary">
                  Proteção de Dados
                </h2>
              </div>
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  Implementamos medidas técnicas e organizacionais apropriadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Isso inclui:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Criptografia de dados sensíveis</li>
                  <li>Acesso restrito às informações pessoais</li>
                  <li>Monitoramento regular de nossos sistemas de segurança</li>
                  <li>Treinamento de nossa equipe sobre proteção de dados</li>
                </ul>
              </div>
            </div>

            {/* User Rights */}
            <div className="bg-card border-2 border-border rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <UserCheck className="w-6 h-6 text-primary" />
                <h2 className="text-2xl md:text-3xl font-black text-secondary">
                  Seus Direitos
                </h2>
              </div>
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem os seguintes direitos:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Acesso:</strong> Solicitar confirmação sobre o tratamento de seus dados</li>
                  <li><strong>Correção:</strong> Solicitar a correção de dados incompletos ou imprecisos</li>
                  <li><strong>Exclusão:</strong> Solicitar a eliminação de dados pessoais tratados com seu consentimento</li>
                  <li><strong>Portabilidade:</strong> Solicitar a transferência de dados para outro fornecedor</li>
                  <li><strong>Revogação:</strong> Revogar o consentimento para tratamento de dados</li>
                  <li><strong>Oposição:</strong> Opor-se ao tratamento de dados em certas circunstâncias</li>
                </ul>
              </div>
            </div>

            {/* Data Sharing */}
            <div className="bg-card border-2 border-border rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl md:text-3xl font-black text-secondary mb-4">
                Compartilhamento de Dados
              </h2>
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros para fins de marketing sem seu consentimento explícito. Podemos compartilhar suas informações apenas:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Com prestadores de serviços que nos auxiliam na operação do site e eventos</li>
                  <li>Quando exigido por lei ou por ordem judicial</li>
                  <li>Para proteger nossos direitos, propriedade ou segurança</li>
                </ul>
              </div>
            </div>

            {/* Cookies */}
            <div className="bg-card border-2 border-border rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl md:text-3xl font-black text-secondary mb-4">
                Cookies e Tecnologias Similares
              </h2>
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  Utilizamos cookies e tecnologias similares para melhorar sua experiência em nosso site. Cookies são pequenos arquivos de texto armazenados em seu dispositivo que nos ajudam a:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Lembrar suas preferências</li>
                  <li>Entender como você usa nosso site</li>
                  <li>Melhorar nossos serviços</li>
                </ul>
                <p>
                  Você pode configurar seu navegador para recusar cookies, mas isso pode afetar sua experiência no site.
                </p>
              </div>
            </div>

            {/* Data Retention */}
            <div className="bg-card border-2 border-border rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl md:text-3xl font-black text-secondary mb-4">
                Retenção de Dados
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Mantemos suas informações pessoais apenas pelo tempo necessário para cumprir os propósitos para os quais foram coletadas, incluindo o cumprimento de quaisquer requisitos legais, contábeis ou de relatório. Após esse período, seus dados serão excluídos ou anonimizados de forma segura.
              </p>
            </div>

            {/* Children Privacy */}
            <div className="bg-card border-2 border-border rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl md:text-3xl font-black text-secondary mb-4">
                Privacidade de Menores
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Nossos serviços não são direcionados a menores de 12 anos. Não coletamos intencionalmente informações pessoais de crianças menores de 12 anos. Se você acredita que coletamos inadvertidamente informações de uma criança, entre em contato conosco imediatamente.
              </p>
            </div>

            {/* Policy Updates */}
            <div className="bg-card border-2 border-border rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl md:text-3xl font-black text-secondary mb-4">
                Alterações nesta Política
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em nossas práticas ou por outros motivos operacionais, legais ou regulatórios. A data da última atualização será sempre indicada no topo desta página. Recomendamos que você revise esta política regularmente.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-primary/10 border-2 border-primary rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl md:text-3xl font-black text-secondary mb-4">
                Entre em Contato
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Se você tiver dúvidas sobre esta Política de Privacidade ou quiser exercer seus direitos, entre em contato conosco:
              </p>
              <div className="space-y-2 text-foreground/80">
                <p><strong>E-mail:</strong> privacidade@animenikity.com</p>
                <p><strong>WhatsApp:</strong> (21) 97749-8015</p>
                <p><strong>Endereço:</strong> Rua Cel. Tamarindo, 200 - Rio de Janeiro, RJ</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingMenu />
    </div>
  );
};

export default PrivacyPolicy;
