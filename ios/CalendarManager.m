//
//  CalendarManager.m
//  abcd
//
//  Created by minimac_05 on 3/16/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "CalendarManager.h"

@implementation CalendarManager
RCT_EXPORT_MODULE();
RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location)
{
  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
  
}
@end
