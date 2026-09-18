import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

for (const file of ['index.html', 'catalogo.html', 'reservas.html', 'contacto.html', 'vercel.json', 'assets/site.css', 'assets/site.js']) {
  test(`${file} exists and is not empty`, async () => {
    const content = await readFile(file, 'utf8');
    assert.ok(content.length > 20);
  });
}

test('home includes principal reservation call to action', async () => {
  const home = await readFile('index.html', 'utf8');
  assert.match(home, /Reserva ya/);
  assert.match(home, /Vuestra muerte es/);
});
