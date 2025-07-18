const core = require('@actions/core');

process.exit(1)

try {
  const autorizado = false;

  if (!autorizado) {
    // Falha silenciosa: define falha sem mensagem
    core.setFailed('bla bla bla');
  }
} catch (error) {
  core.setFailed(error.message);
}
