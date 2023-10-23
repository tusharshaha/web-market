import { Controller, Get, Query, UseGuards } from "@nestjs/common";
import { JobsService } from "./jobs.service";
import { handleError } from "../utils/errorHandler";
import { Throttle, ThrottlerGuard } from "@nestjs/throttler";

@Controller("jobs")
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Get("/")
  @UseGuards(ThrottlerGuard)
  @Throttle()
  async jobList(
    @Query("limit") limit: string,
    @Query("offset") offset: string,
  ) {
    try {
      return await this.jobsService.getJobList({ limit, offset });
    } catch (error) {
      return handleError(error);
    }
  }
}
