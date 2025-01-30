export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  checkItemName(currentItemName: string) {
    
  }
  isQualityZero(currentItemQuality: number) {
    //if true -> return currentItemQuality
    //if false, then call degradeQuality()
    // return currentItemQuality
  }

  isQualityMax(currentItem: Item, incrementQuality: number) {
    //if true -> return currentItemQuality --no cha
    if (currentItem.quality)
    //if false -> call degradeQuality || allow degradeQuality() to proceed?
  }

  isBackstagePass(currentItem: Item) {
    if (currentItem.sellIn >= 6 && currentItem.sellIn <= 10) {
      currentItem.quality += 2;
    }
    else if (currentItem.sellIn >= 0 && currentItem.sellIn <= 5) {
      currentItem.quality += 3;
    }
    else (currentItem.sellIn > 10) {
      this.increaseByOne(currentItem);
    }
    return currentItem;
  }

  increaseByOne(currentItem: Item) {
    currentItem.quality += 1;
    return currentItem;
  }

  degradeQuality(currentItem) {
    if (currentItem.name == 'Aged Brie') {
      if (!this.isQualityMax(currentItem, 1)) {
        false
      }
      else 
        this.increaseByOne(currentItem);
    }

    else if (currentItemName == 'Sulfuras, Hand of Ragnaros') {
      this.items[i].quality = this.items[i].quality;
    }
    else if (currentItem.name == 'Backstage passes to a TAFKAL80ETC concert') {
      this.isBackstagePass(currentItem);
      }
    }
    else
      this.items[i].quality -= 1;

    return this.items[i].quality;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.items[i].quality > 0) {
          if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
            this.items[i].quality = this.items[i].quality - 1
          }
        }
      } else {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1
          if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1
              }
            }
          }
        }
      }
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != 'Aged Brie') {
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.items[i].quality = this.items[i].quality - 1
              }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1
          }
        }
      }
    }

    return this.items;
  }
}


