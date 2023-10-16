import { Injectable } from "@nestjs/common";
import axios from "axios";

@Injectable()
export class JobsService {
  async getJobList({ limit, offset }) {
    if (!Number(limit) || !Number(offset) || limit > 20) {
      return;
    }
    const res = await axios.get(`${process.env.JOB_API_URL}/api`, {
      params: {
        limit,
        offset,
      },
    });
    return await res.data;
  }
}
