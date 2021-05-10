export interface AuthenticationExample {
  image: string;
  text: string;
}

export interface GoalCategory {
  id: number;
  level1: string;
  level2: string;
  level3: string;
  level4: string;
}

export interface AchievementResult {
  achievementRate: number;
  before: number;
  challengeCount: number;
  consecutiveCount: number;
  itemUseCount: number;
  miss: number;
  ng: number;
  ok: number;
  pass: number;
  red: number;
  total: number;
  yellow: number;
}

export interface Goal {
  achievementIntervalMinute: number;
  countDown: boolean;
  createdAt: Date;
  cycle: string[];
  dayOrPeriod: string;
  dueEndTime: string;
  dueStartTime: string;
  frequency: number;
  goalCategory: GoalCategory;
  goalCategoryId: number;
  goalType?: any;
  id: number;
  imageUrls: string;
  isAchievementPublic: boolean;
  isDeleted: boolean;
  isGalleryPossible: boolean;
  maxAchieveCountPerDay: number;
  period: number;
  restInHoliday: boolean;
  scoreOrBinary: string;
  target?: any;
  targetOrder: string;
  targetQuestion: string;
  targetText: string;
  timePrintSize: string;
  title: string;
  totalAchieveCountPerCycle: number;
  totalDays: number;
  totalDaysOrder: string;
  unit?: any;
  updatedAt: Date;
}
export interface ReviewsType {
  avgRate: number;
  comments: Comment[];
}

export interface ChallengeType {
  achievementRecord: any[];
  achievementResult: AchievementResult;
  achievementResultInfo: any[];
  achievements: any[];
  adImageUrl: string;
  adType: string;
  adminUserIds: number[];
  authenticationBadExamples: AuthenticationExample[];
  authenticationChecklist: any[];
  authenticationGoodExamples: AuthenticationExample[];
  authenticationMethod: string;
  challengeResult: any[];
  createdAt: Date;
  customFields: any[];
  descriptionExtra: any[];
  descriptionModule: any[];
  endDate: Date;
  exp: number;
  floatingChecklist: string;
  goal: Goal;
  goalAvgRate: number;
  goalId: number;
  id: number;
  isDaily: boolean;
  isRetry: boolean;
  isSurvival: boolean;
  isDeleted: boolean;
  isPublic: boolean;
  isRegisterDepositFixed: boolean;
  isUsualFrequencyDisplayed: boolean;
  maxRegisterCount: number;
  maxRegisterDeposit: number;
  minCollectDeposit: number;
  minRegisterDeposit: number;
  myRegisterInfo: any[];
  nextChallenge: any[];
  password: string;
  recordHistory: any[];
  registerInfo: any[];
  registerEndDate: Date;
  registerStartDate: Date;
  relationUserChallenge: any[];
  resultDate: Date;
  reviews: ReviewsType;
  sameGoalCategoryRegister: number;
  startDate: Date;
  tags: any[];
  thirdTermUrl: string;
  thumbnailImageUrls: any[];
  title: string;
  totalAchievementCount: number;
  updatedAt: Date;
  userId: number;
}
