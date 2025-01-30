import { expect } from 'chai';
import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
//   it('should foo', () => {
//     const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
//     const items = gildedRose.updateQuality();
//     expect(items[0].name).to.equal('fixme');
//   });
// });

  it('is Backstage pass selling in 5 days or less', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(3);
  });

  it('is Backstage pass selling in 10 days or less', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(2);
  });

  it('is Backstage pass selling in 20 days or less', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 20, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(1);
  });

  it('Quality of an item can Never be more than 50', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 49)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(47);
  });

  it('is Backstage pass and Quality of an item is not negative', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', -3, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(0);
  });

  it('Item is passed Sell by date and Quality degrades twice as fast', () => {
    const gildedRose = new GildedRose([new Item('foo', -3, 4)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(2);
  });

});

