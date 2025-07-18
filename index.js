const core = require('@actions/core');

try {
  const autorizado = false;

  if (!autorizado) {
    // Falha silenciosa: define falha sem mensagem
    core.setFailed('');
  }
} catch (error) {
  core.setFailed(error.message);
}
