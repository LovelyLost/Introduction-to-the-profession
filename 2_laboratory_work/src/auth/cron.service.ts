import { Injectable } from '@nestjs/common';
import { Cron, CronExpression, Interval } from '@nestjs/schedule';

@Injectable()
export class CronService {
  @Cron('30 * * * * *')
  every30Seconds() {
    console.log('Этот лог будет появляться каждые 30 секунд');
  }

  @Cron(CronExpression.EVERY_30_SECONDS)
  @Cron('30 * * * * *')
  every30SecondsV2() {
    console.log('Этот лог тоже будет появляться каждые 30 секунд');
  }

  @Cron(CronExpression.EVERY_30_SECONDS)
  @Interval(30000)
  every30SecondsV3() {
    console.log('И этот лог будет появляться каждые 30 секунд');
  }

  @Cron(CronExpression.EVERY_30_SECONDS)
  @Interval(60000)
  every3minutes() {
    console.log('этот лог будет появляться каждые 3 минуты');
  }

  @Cron(CronExpression.EVERY_30_SECONDS)
  @Interval(268000)
  every4min28sec() {
    console.log('этот лог будет появляться каждые 4 минуты 28 сек');
  }

  @Cron(CronExpression.EVERY_30_SECONDS)
  @Interval(600000)
  every10min() {
    console.log('этот лог будет появляться каждые 10 минут');
  }
}
