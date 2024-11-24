# 🛠️ Cypress Testy pre E-shop 🛒

Tento projekt obsahuje dva funkčné testy pre e-shop. Testy overujú správnosť interakcie používateľa s filtrovacími komponentmi a ich dopad na URL parametre a viditeľné výstupy.

## 🎯 Ciele Testov

- **Kontrola URL parametrov (Query Parameters)**  
  Overuje, či komponent aktualizuje URL parametre správne po interakcii.

- **Kontrola viditeľného výstupu**  
  Zaisťuje, že produkty zobrazené an stránke odrážajú vybrané filtre.

---

## 🧪 Testy

### Test 1: Query Parameters After Interactions WithC omponent
Overuje, že filtre (napr. „Skladom“, „Novinky“) pridávajú správne parametre do URL po kliknutí.

**Krokový postup:**
1. Používateľ klikne na checkbox (napr. „Skladom“).
2. Test zachytí a overí prítomnosť zodpovedajúceho parametra v URL (napr. `stock=1`).
3. Tento proces sa opakuje pre viaceré filtre (napr. „Zľavy“, „Tipy“).

---

### Test 2: Check Visible OutputBased On The Interaction With Component
Overuje, že produkty v mriežke odpovedajú aplikovanému filtru.

**Krokový postup:**
1. Používateľ vyberie filter dostupnosti („Skladom“).
2. Test overí, že každý produkt v mriežke má označenie dostupnosti „Skladem“ alebo „Na dotaz“.
3. Tento proces sa opakuje pre iné filtre (napr. novinky, zľavy).

---

## ✨ Záver

Tieto testy demonštrujú efektívne overenie funkčnosti filtrov e-shopu a ich vplyv na zobrazované produkty a URL adresu. Testy sú pripravené na jednoduché rozšírenie pre ďalšie komponenty alebo scenáre. 🎉
