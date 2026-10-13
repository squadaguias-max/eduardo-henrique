import { useState } from 'react'
import { ArrowDownRight, ArrowUpRight, Check, ChevronDown, ClipboardList, Mail, MapPin, Menu, MessageCircle, Phone, ShieldCheck, X } from 'lucide-react'

const phone = '5531987232636'
const whatsapp = `https://wa.me/${phone}?text=${encodeURIComponent('Olá! Gostaria de receber orientação sobre um acidente de trabalho ou doença ocupacional.')}`
const address = 'Rua Guajajaras, 1470, 7º andar, sala 708 · Barro Preto · Belo Horizonte, MG · CEP 30180-101'
const mapQuery = 'Rua Guajajaras, 1470, Barro Preto, Belo Horizonte, MG, 30180-101'
const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`
const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&z=16&output=embed`

const situations = [
  { image: '/images/radiografia-braco.jpg', alt: 'Radiografia ilustrativa de braço e punho', width: 1660, height: 2048, number: '01', title: 'Acidente durante o trabalho', text: 'Quedas, lesões e outros acontecimentos durante a atividade profissional merecem uma análise cuidadosa das circunstâncias e dos documentos.' },
  { image: '/images/trabalhador-obra.jpg', alt: 'Profissional com equipamentos de proteção em uma obra', width: 1536, height: 1536, number: '02', title: 'Doença relacionada à atividade', text: 'Dores e limitações que surgem ou se agravam com a rotina de trabalho também podem exigir avaliação jurídica e médica.' },
  { image: '/images/documentos-saude.jpg', alt: 'Documentos de saúde e equipamentos de exame sobre uma mesa', width: 2121, height: 1414, number: '03', title: 'Dúvidas após o afastamento', text: 'Retorno ao trabalho, despesas, estabilidade e possíveis reparações dependem dos fatos de cada caso.' },
]

const rights = [
  ['01', 'Indenização', 'Em certas situações, pode haver discussão sobre danos morais, materiais ou estéticos.'],
  ['02', 'Capacidade de trabalho', 'A redução da capacidade laboral pode ter consequências jurídicas que precisam ser avaliadas.'],
  ['03', 'Estabilidade', 'O tipo de afastamento e os requisitos legais influenciam a existência de estabilidade.'],
  ['04', 'Despesas de tratamento', 'Gastos ligados ao acidente ou à doença podem integrar a análise do caso.'],
]

const faqs = [
  ['Quais documentos devo reunir?', 'Se disponíveis, separe documentos do vínculo de trabalho, comunicação do acidente, atestados, exames, comprovantes de afastamento e despesas de tratamento. A lista necessária varia conforme o caso.'],
  ['Uma doença pode estar ligada ao trabalho?', 'Pode. A relação entre a atividade e a doença depende de avaliação das condições de trabalho, do histórico de saúde e dos documentos médicos.'],
  ['O atendimento pode começar pelo WhatsApp?', 'Sim. O primeiro contato pode ser feito pelo WhatsApp para explicar brevemente a situação e combinar os próximos passos. Evite enviar documentos sensíveis antes de receber orientação.'],
]

function Logo({ className = '' }) {
  return <img src="/logo-essencial.svg" width="560" height="220" alt="Essencial Advocacia & Consultoria" className={className} />
}

function WhatsAppButton({ children, light = false, className = '' }) {
  return <a href={whatsapp} target="_blank" rel="noopener noreferrer" className={`${light ? 'button-light' : 'button-red'} ${className}`}><MessageCircle size={19} strokeWidth={1.8} aria-hidden="true" />{children}<ArrowUpRight size={18} aria-hidden="true" /></a>
}

function SectionLabel({ children, light = false }) {
  return <div className={`section-label ${light ? 'section-label-light' : ''}`}><span className="section-label-line" />{children}</div>
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return <>
    <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <div className="topline"><span>ESSENCIAL ADVOCACIA & CONSULTORIA</span><span>BELO HORIZONTE · MG</span></div>
    <header className="site-header">
      <div className="shell header-inner">
        <a className="logo-link" href="#inicio" aria-label="Essencial Advocacia, voltar ao início" onClick={closeMenu}><Logo /></a>
        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Navegação principal">
          <a href="#situacoes" onClick={closeMenu}>Quando procurar</a>
          <a href="#direitos" onClick={closeMenu}>Possíveis direitos</a>
          <a href="#sobre" onClick={closeMenu}>O escritório</a>
          <a href="#contato" onClick={closeMenu}>Contato</a>
        </nav>
        <a className="header-contact" href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle size={17} aria-hidden="true" />Fale conosco<ArrowUpRight size={16} aria-hidden="true" /></a>
        <button type="button" className="menu-toggle" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>
      </div>
    </header>

    <main id="conteudo">
      <section className="hero" id="inicio">
        <div className="hero-grid shell">
          <div className="hero-content">
            <div className="hero-kicker"><span className="red-dot" /> ADVOCACIA TRABALHISTA EM BELO HORIZONTE</div>
            <h1>Após um acidente de trabalho, <em>informação faz diferença.</em></h1>
            <p className="hero-lead">Orientação jurídica para trabalhadores da construção civil que enfrentam acidentes, doenças relacionadas ao trabalho e dúvidas após o afastamento.</p>
            <div className="hero-actions"><WhatsAppButton>Conte o que aconteceu</WhatsAppButton><a className="text-link" href="#situacoes">Entenda como podemos ajudar <ArrowDownRight size={18} aria-hidden="true" /></a></div>
            <p className="hero-disclaimer"><ShieldCheck size={16} aria-hidden="true" />Cada situação exige análise individual. O contato inicial não garante qualquer resultado.</p>
          </div>
          <div className="hero-visual">
            <img className="hero-photo" src="/images/eduardo-escritorio.jpg" alt="Profissional da Essencial trabalhando com documentos no escritório" width="960" height="1280" fetchPriority="high" />
            <div className="hero-visual-top"><span>ESSENCIAL</span><span>01 / ORIENTAÇÃO JURÍDICA</span></div>
            <div className="hero-visual-bottom"><span>ESCUTA. ANÁLISE. ORIENTAÇÃO.</span><ArrowUpRight size={20} aria-hidden="true" /></div>
          </div>
        </div>
        <div className="hero-footer shell"><span>ACIDENTE DE TRABALHO</span><span>DOENÇA OCUPACIONAL</span><span>CONSTRUÇÃO CIVIL</span><span>BELO HORIZONTE · MG</span></div>
      </section>

      <section className="intro-section" id="situacoes">
        <div className="shell intro-layout">
          <div className="intro-heading"><SectionLabel>QUANDO BUSCAR ORIENTAÇÃO</SectionLabel><h2>O que aconteceu com você merece ser ouvido com atenção.</h2><p>Em situações de acidente ou adoecimento, conhecer o contexto do trabalho e reunir os documentos é o primeiro passo para entender quais caminhos podem ser avaliados.</p><img className="intro-photo" src="/images/capacete-construcao.jpg" alt="Capacete e luvas de proteção em um canteiro de obras" width="1980" height="1320" loading="lazy" /></div>
          <div className="situation-list">{situations.map(({ image, alt, width, height, number, title, text }) => <article className="situation" key={number}><div className="situation-number">{number}</div><img className="situation-photo" src={image} alt={alt} width={width} height={height} loading="lazy" /><div className="situation-content"><h3>{title}</h3><p>{text}</p></div><ArrowUpRight className="situation-arrow" size={21} aria-hidden="true" /></article>)}</div>
        </div>
      </section>

      <section className="rights-section" id="direitos">
        <div className="shell"><div className="rights-heading"><div><SectionLabel light>POSSÍVEIS DIREITOS</SectionLabel><h2>Cada direito começa com uma análise do caso.</h2></div><p>As consequências jurídicas variam conforme o ocorrido, o vínculo de trabalho, os registros médicos e outros elementos. Estes são alguns temas que podem ser examinados:</p></div><div className="rights-grid">{rights.map(([number, title, text]) => <article className="right-card" key={number}><span>{number} /</span><div className="right-card-icon"><ArrowUpRight size={24} strokeWidth={1.4} aria-hidden="true" /></div><h3>{title}</h3><p>{text}</p></article>)}</div><p className="rights-note"><ShieldCheck size={17} aria-hidden="true" /> A possibilidade de qualquer medida depende de avaliação individual e da legislação aplicável.</p></div>
      </section>

      <section className="process-section" id="processo"><div className="shell process-grid"><div><SectionLabel>COMO COMEÇAR</SectionLabel><h2>Clareza nos próximos passos.</h2><p>O atendimento começa com uma conversa sobre os fatos. A partir daí, é possível identificar quais informações e documentos serão necessários.</p><WhatsAppButton>Iniciar conversa</WhatsAppButton><img className="process-photo" src="/images/epi-construcao.jpg" alt="Capacete, luvas, óculos e bloco de anotações usados na construção civil" width="2048" height="1365" loading="lazy" /></div><ol className="process-list"><li><span>01</span><div><h3>Conte sua situação</h3><p>Relate, de forma breve, o que ocorreu e quando aconteceu.</p></div><MessageCircle size={21} aria-hidden="true" /></li><li><span>02</span><div><h3>Organize as informações</h3><p>Documentos médicos e do trabalho ajudam a entender o histórico.</p></div><ClipboardList size={21} aria-hidden="true" /></li><li><span>03</span><div><h3>Receba orientação</h3><p>Os possíveis caminhos são avaliados conforme os detalhes do seu caso.</p></div><Check size={21} aria-hidden="true" /></li></ol></div></section>

      <section className="about-section" id="sobre"><div className="shell about-grid"><div className="about-brand"><div className="about-brand-inner"><span>ESSENCIAL</span><Logo /><div className="about-brand-rule" /><p>Advocacia & Consultoria<br />Belo Horizonte · Minas Gerais</p></div></div><div className="about-copy"><SectionLabel>QUEM ESTÁ POR TRÁS DA ESSENCIAL</SectionLabel><h2>Atendimento próximo, orientação responsável.</h2><p className="about-intro">A Essencial Advocacia & Consultoria tem como contato Eduardo Henrique S. Castro e endereço profissional no bairro Barro Preto, em Belo Horizonte.</p><p>Esta página apresenta informações iniciais sobre questões trabalhistas ligadas a acidentes e doenças ocupacionais. A definição de qualquer medida jurídica depende da avaliação dos fatos e documentos.</p><div className="about-signature"><span className="signature-rule" /><div><strong>Eduardo Henrique S. Castro</strong><small>Essencial Advocacia & Consultoria</small></div></div></div></div></section>

      <section className="faq-section" id="duvidas"><div className="shell faq-grid"><div><SectionLabel>DÚVIDAS FREQUENTES</SectionLabel><h2>Informação para dar o primeiro passo.</h2><p>Respostas gerais para ajudar você a preparar a conversa inicial.</p></div><div className="faq-list">{faqs.map(([q, a]) => <details key={q}><summary>{q}<ChevronDown size={20} aria-hidden="true" /></summary><p>{a}</p></details>)}</div></div></section>

      <section className="contact-section" id="contato"><div className="shell contact-grid"><div><SectionLabel light>FALE COM A ESSENCIAL</SectionLabel><h2>Vamos entender sua situação?</h2><p>Envie uma mensagem para iniciar o contato. Você também pode ligar ou escrever por e-mail.</p><WhatsAppButton light>Falar pelo WhatsApp</WhatsAppButton></div><div className="contact-card"><div className="contact-card-heading">CONTATO & LOCALIZAÇÃO <ArrowUpRight size={20} aria-hidden="true" /></div><a href="tel:+5531987232636"><Phone size={19} aria-hidden="true" /><span><small>TELEFONE / WHATSAPP</small>(31) 98723-2636</span></a><a href="mailto:eduardohcastro@gmail.com"><Mail size={19} aria-hidden="true" /><span><small>E-MAIL</small>eduardohcastro@gmail.com</span></a><a href={mapUrl} target="_blank" rel="noopener noreferrer"><MapPin size={19} aria-hidden="true" /><span><small>ENDEREÇO</small>{address}</span></a></div></div></section>

      <section className="map-section" id="localizacao"><div className="shell"><div className="map-heading"><div><SectionLabel>LOCALIZAÇÃO</SectionLabel><h2>Encontre a Essencial em Belo Horizonte.</h2><address>{address}</address></div><a href={mapUrl} target="_blank" rel="noopener noreferrer">Abrir no Google Maps <ArrowUpRight size={18} aria-hidden="true" /></a></div><iframe title="Mapa do endereço da Essencial Advocacia no Barro Preto, Belo Horizonte" src={mapEmbedUrl} width="1200" height="390" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /></div></section>
    </main>

    <footer className="footer"><div className="shell"><div className="footer-main"><div><Logo /><p>Informação e orientação jurídica com atenção à singularidade de cada caso.</p></div><div className="footer-links"><a href="#situacoes">Quando procurar</a><a href="#direitos">Possíveis direitos</a><a href="#sobre">O escritório</a><a href="#contato">Contato</a></div></div><div className="footer-legal">Este material tem caráter meramente informativo e não constitui publicidade profissional nos termos do Provimento nº 205/2021 do CFOAB. As informações aqui veiculadas não garantem resultados específicos.</div><div className="footer-bottom"><span>© {new Date().getFullYear()} Essencial Advocacia & Consultoria.</span><span>Eduardo Henrique S. Castro · Belo Horizonte/MG</span></div></div></footer>
    <a className="floating-wa" href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Conversar com a Essencial pelo WhatsApp"><MessageCircle size={23} aria-hidden="true" /></a>
  </>
}
