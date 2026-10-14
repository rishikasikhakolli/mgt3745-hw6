# builds/

Commit each project exactly as downloaded:

- `bolt.zip`
<img width="1210" height="646" alt="Screenshot 2026-10-14 at 7 44 12 PM" src="https://github.com/user-attachments/assets/b2757f6e-59f2-4bcf-a5b4-e0ae63739263" />

- `aistudio.zip`
<img width="1210" height="646" alt="Screenshot 2026-10-14 at 7 29 14 PM" src="https://github.com/user-attachments/assets/e0fb93a5-c0cb-4bad-b47f-748af72e3b00" />

To run the shared eval, copy the function each build uses for your chosen EARS row into `evals/impl/bolt.js` and `evals/impl/aistudio.js`, changing only what is needed to export it. Note any change you made in the DDR for that builder.
