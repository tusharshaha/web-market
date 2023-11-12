import { Controller, Get, Query, UseGuards } from "@nestjs/common";
import { JobsService } from "./jobs.service";
import { handleError } from "../utils/errorHandler";
import { Public } from "../common/public.decorator";

@Controller("jobs")
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Public()
  @Get("/")
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
