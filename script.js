// Habilita o campo de modelo no formulário de avaria ao selecionar o tipo
document.addEventListener('DOMContentLoaded', function() {
  var tipoMaquina = document.getElementById('tipoMaquina');
  var modeloMaquina = document.getElementById('modeloMaquina');
  if (tipoMaquina && modeloMaquina) {
    tipoMaquina.addEventListener('change', function() {
      const tipo = this.value;
      modeloMaquina.innerHTML = '';
      modeloMaquina.disabled = true;
      if (tipo && (window.modelosPorTipo || modelosPorTipo) && ((window.modelosPorTipo && window.modelosPorTipo[tipo]) || (typeof modelosPorTipo !== 'undefined' && modelosPorTipo[tipo]))) {
        modeloMaquina.disabled = false;
        modeloMaquina.innerHTML = '<option value="">Selecione o modelo</option>';
        var listaModelos = (window.modelosPorTipo && window.modelosPorTipo[tipo]) ? window.modelosPorTipo[tipo] : modelosPorTipo[tipo];
        Object.keys(listaModelos).forEach(function(modelo) {
          const opt = document.createElement('option');
          opt.value = modelo;
          opt.textContent = modelo;
          modeloMaquina.appendChild(opt);
        });
      }
    });
  }
});
// Modal de comunicação de avaria
function abrirModalAvaria() {
  document.getElementById('modalAvaria').style.display = 'flex';
}
function fecharModalAvaria() {
  document.getElementById('modalAvaria').style.display = 'none';
  document.getElementById('formAvaria').reset();
  document.getElementById('statusAvaria').textContent = '';
}

function enviarAvaria() {
  const nome = document.getElementById('nomeAvaria').value.trim();
  const local = document.getElementById('localAvaria').value.trim();
  const desc = document.getElementById('descAvaria').value.trim();
  const fotoInput = document.getElementById('fotoAvaria');
  if (!nome || !local || !desc) {
    document.getElementById('statusAvaria').textContent = 'Preencha todos os campos obrigatórios.';
    return;
  }
  let fotoUrl = '';
  if (fotoInput.files && fotoInput.files[0]) {
    // Tenta criar um link temporário da imagem
    fotoUrl = URL.createObjectURL(fotoInput.files[0]);
  }
  const destinatario = 'avarias@dominio.com'; // Troque para o email desejado
  const assunto = encodeURIComponent('Comunicação de Avaria');
  let corpo = `Nome: ${nome}\nLocalização: ${local}\nDescrição: ${desc}`;
  if (fotoUrl) corpo += `\nFoto: ${fotoUrl}`;
  corpo = encodeURIComponent(corpo);
  window.location.href = `mailto:${destinatario}?subject=${assunto}&body=${corpo}`;
  document.getElementById('statusAvaria').textContent = 'Avaria registrada!';
  setTimeout(fecharModalAvaria, 1800);
}
// Função para comunicar avaria
function comunicarAvaria() {
  let nome = prompt('Informe seu nome:');
  if (!nome) return;
  let empresa = prompt('Informe sua empresa:');
  if (!empresa) return;
  let descricao = prompt('Descreva a avaria:');
  if (!descricao) return;
  const destinatario = 'seuemail@dominio.com'; // Troque para o email desejado
  const assunto = encodeURIComponent('Comunicação de Avaria');
  const corpo = encodeURIComponent(
    `Nome: ${nome}\nEmpresa: ${empresa}\nDescrição da avaria: ${descricao}`
  );
  window.location.href = `mailto:${destinatario}?subject=${assunto}&body=${corpo}`;
}
// Função para comunicar avaria
function comunicarAvaria() {
  let nome = prompt('Informe seu nome:');
  if (!nome) return;
  let empresa = prompt('Informe sua empresa:');
  if (!empresa) return;
  let descricao = prompt('Descreva a avaria:');
  if (!descricao) return;
  const destinatario = 'seuemail@dominio.com'; // Troque para o email desejado
  const assunto = encodeURIComponent('Comunicação de Avaria');
  const corpo = encodeURIComponent(
    `Nome: ${nome}\nEmpresa: ${empresa}\nDescrição da avaria: ${descricao}`
  );
  window.location.href = `mailto:${destinatario}?subject=${assunto}&body=${corpo}`;
}
// --- CADASTRO ---
function getLocation() {
  const nome = document.getElementById('nome').value.trim();
  const empresa = document.getElementById('empresa').value.trim();
  if (!nome || !empresa) {
    document.getElementById('status').textContent = 'Preencha todos os campos.';
    return;
  }
  if (!navigator.geolocation) {
    document.getElementById('status').textContent = 'GPS não suportado.';
    return;
  }
  document.getElementById('status').textContent = 'Obtendo localização...';
  navigator.geolocation.getCurrentPosition(function(pos) {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    document.getElementById('status').textContent = 'Localização obtida! Enviando...';
    enviarCadastro(nome, empresa, lat, lon);
  }, function() {
    document.getElementById('status').textContent = 'Não foi possível obter a localização.';
  });
}

function enviarCadastro(nome, empresa, lat, lon) {
  const destinatario = 'andrerdeus087@gmail.com'; // Troque para o email desejado
  const assunto = encodeURIComponent('Cadastro de Usuário');
  const corpo = encodeURIComponent(
    `Nome: ${nome}\nEmpresa: ${empresa}\nLatitude: ${lat}\nLongitude: ${lon}`
  );
  window.location.href = `mailto:${destinatario}?subject=${assunto}&body=${corpo}`;
  // Após envio, mostrar botão avançar
  const avancarBtn = document.getElementById('avancarBtn');
  avancarBtn.style.display = 'inline-block';
  avancarBtn.style.background = '#2ecc40';
  avancarBtn.style.color = '#fff';
  document.getElementById('enviarBtn').disabled = true;
  setTimeout(function() {
    window.location.href = 'index.html';
  }, 1500);
}
// --- MANUAIS ---
const modelosPorTipo = {
  telescopia: {
    'Plataforma SX-135 XC': 'pdfs/sx-135-xc.pdf',
    'Plataforma S-125': 'pdfs/s-125.pdf',
    'Plataforma 1350SJP': 'pdfs/1350sjp.pdf',
    'Plataforma 1200SJP': 'pdfs/1200sjp.pdf'
  },
  articulada: {
    'HA16RTJ': 'pdfs/ha16rtj.pdf',
    'Plataforma S-80J': 'pdfs/s-80j.pdf',
    'Plataforma ZA18J': 'pdfs/za18j.pdf',
    'Plataforma ZA14JE-Eletrica': 'pdfs/za14je-eletrica.pdf',
    'Plataforma ZA 14J - Diesel': 'pdfs/za14j-diesel.pdf',
    'Plataforma Z135 70': 'pdfs/z135-70.pdf',
    'Plataforma Z8060': 'pdfs/z8060.pdf',
    'Plataforma Z45 22J - ELÉTRICA': 'pdfs/z45-22j-eletrica.pdf',
    'Plataforma Z6034': 'pdfs/z6034.pdf',
    'PlataformA Z45 22J-DIESEL': 'pdfs/z45-22j-diesel.pdf',
    'Plataforma Z3422-DIESEL': 'pdfs/z3422-diesel.pdf',
    'Plataforma Z3422-ELÉTRICA': 'pdfs/z3422-eletrica.pdf',
    'Plataforma 1250AJP': 'pdfs/1250ajp.pdf',
    'Plataforma E300AJ': 'pdfs/e300aj.pdf',
    'Plataforma E600JP': 'pdfs/e600jp.pdf',
    'Plataforma E450AJ': 'pdfs/e450aj.pdf',
    'Plataforma 800AJ': 'pdfs/800aj.pdf',
    'Plataforma 600AJ': 'pdfs/600aj.pdf'
  },
  tesoura: {
    'Plataforma 2630ES': 'pdfs/2630es.pdf',
    'Plataforma 3394RT': 'pdfs/3394rt.pdf',
    'Plataforma GS3246': 'pdfs/gs3246.pdf',
    'Plataforma GS4390RT': 'pdfs/gs4390rt.pdf',
    'Plataforma COMPACT10N': 'pdfs/compact10n.pdf',
    'Plataforma ZS0607AC': 'pdfs/zs0607ac.pdf',
    'Plataforma SJ8841 RT': 'pdfs/sj8841rt.pdf',
    'Plataforma SJ4740ET': 'pdfs/sj4740et.pdf',
    'Plataforma 3246RS': 'pdfs/3246rs.pdf',
    'Plataforma 4394RT': 'pdfs/4394rt.pdf',
    'Plataforma 6RS': 'pdfs/6rs.pdf',
    'Plataforma GS2646': 'pdfs/gs2646.pdf',
    'Plataforma GS4069RT': 'pdfs/gs4069rt.pdf',
    'Plataforma COMPACT 8': 'pdfs/compact8.pdf',
    'Plataforma ZS1012DC': 'pdfs/zs1012dc.pdf',
    'Plataforma SJIII 4632': 'pdfs/sjiii4632.pdf',
    'Plataforma SJIII 3219': 'pdfs/sjiii3219.pdf',
    'Plataforma 10RS': 'pdfs/10rs.pdf',
    'Plataforma ES1932': 'pdfs/es1932.pdf',
    'Plataforma GS1930': 'pdfs/gs1930.pdf',
    'Plataforma GS4047': 'pdfs/gs4047.pdf',
    'Plataforma GS5390RT': 'pdfs/gs5390rt.pdf',
    'Plataforma ZS1414AC': 'pdfs/zs1414ac.pdf',
    'Plataforma SJIII 3226': 'pdfs/sjiii3226.pdf',
    'Plataforma COMPACT 14': 'pdfs/compact14.pdf'
  },
  mastro: {
    'Plataforma STAR 10': 'pdfs/star10.pdf'
  },
  manipulador: {
    'Manipulador 540 170': 'pdfs/540170.pdf'
  },
  torre: {
    'Torre de Iluminação': 'pdfs/torre-iluminacao.pdf'
  }
};

function updateModelos() {
  const tipo = document.getElementById('tipo').value;
  const modeloSelect = document.getElementById('modelo');
  modeloSelect.innerHTML = '';
  modeloSelect.disabled = true;
  document.getElementById('downloadBtn').style.display = 'none';
  if (tipo && modelosPorTipo[tipo]) {
    modeloSelect.disabled = false;
    modeloSelect.innerHTML = '<option value="">Selecione o modelo</option>';
    Object.keys(modelosPorTipo[tipo]).forEach(function(modelo) {
      const opt = document.createElement('option');
      opt.value = modelo;
      opt.textContent = modelo;
      modeloSelect.appendChild(opt);
    });
  }
}

document.getElementById('modelo')?.addEventListener('change', function() {
  const tipo = document.getElementById('tipo').value;
  const modelo = this.value;
  const btn = document.getElementById('downloadBtn');
  if (tipo && modelo && modelosPorTipo[tipo][modelo]) {
    btn.style.display = 'inline-block';
  } else {
    btn.style.display = 'none';
  }
});

function baixarManual() {
  const tipo = document.getElementById('tipo').value;
  const modelo = document.getElementById('modelo').value;
  if (tipo && modelo && modelosPorTipo[tipo][modelo]) {
    window.open(modelosPorTipo[tipo][modelo], '_blank');
  }
}
function toggleAvaria(id) {
  // Esconde todos os blocos
  document.querySelectorAll('.avaria-info').forEach(function(div) {
    div.style.display = 'none';
  });
  // Exibe o bloco selecionado
  var el = document.getElementById(id);
  if (el) el.style.display = 'block';
}

// Oculta todos os textos ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.avaria-info').forEach(function(div) {
    div.style.display = 'none';
  });
});
