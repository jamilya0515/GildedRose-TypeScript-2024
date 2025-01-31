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


  isQualityValid(currentItem: Item, incrementQualityBy: number) {
    if (currentItem.quality >= 0 && currentItem.quality < 50) {
      return true;
    }
    else  //(currentItem.quality + incrementQualityBy >= 50 || currentItem.quality + incrementQualityBy < 0)
      return false; 
  }

  changeQuality(currentItem: Item, incrementQualityBy: number) {
    if (this.isQualityValid(currentItem, incrementQualityBy)) {
      currentItem.quality += incrementQualityBy;  
      return currentItem;
    }
    else {
      return currentItem;
    }
  }

  isBackstagePass(currentItem: Item) {
    if (currentItem.sellIn >= 6 && currentItem.sellIn <= 10) {
      this.changeQuality(currentItem, 2)
      } 
    else if (currentItem.sellIn >= 0 && currentItem.sellIn <= 5) {
      (this.changeQuality(currentItem, 3))
      } 
    else if (currentItem.sellIn < 0) {
      currentItem.quality = 0;
    }
    else {
      if (this.isQualityValid(currentItem, 1)) {
        this.changeQuality(currentItem, 1)
      } 
    } 
    console.log("in IsBackstagePass function:,", currentItem);
    return currentItem;
  }

  withinSellInDate(currentItem: Item) {
    if (currentItem.sellIn >= 0) {
      return true;
    }
    else 
      return false;
  }

  degradeQuality(currentItem: Item) : Item {
    if (currentItem.name == 'Aged Brie') {
      if (this.isQualityValid(currentItem, 1)) {
        this.changeQuality(currentItem, 1);
      }
    }
    else if (currentItem.name == 'Sulfuras, Hand of Ragnaros') {
      return currentItem;
    }
    else if (currentItem.name == 'Backstage passes to a TAFKAL80ETC concert') {
      this.isBackstagePass(currentItem);
      }
    else {
      if (this.withinSellInDate(currentItem)) {
        currentItem = this.changeQuality(currentItem, -1)
        }
      else {
        currentItem = this.changeQuality(currentItem, -2)
      }
    }
    currentItem.sellIn -= 1;
    return currentItem;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      this.items[i] = this.degradeQuality(this.items[i])
    }
    return this.items;
  }
}

/*
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
      */
