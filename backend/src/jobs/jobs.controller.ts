import { Controller, Get, Query } from "@nestjs/common";
import { JobsService } from "./jobs.service";
import { handleError } from "src/utils/errorHandler";

@Controller("jobs")
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

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
